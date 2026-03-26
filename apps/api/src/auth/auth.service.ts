import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { AuthenticatedUser } from './jwt.strategy';
import { InvalidCredentialsException, InvalidTokenException } from '../common/exceptions/auth.exception';

export interface TokenPair {
  accessToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<{ accessToken: string; user: AuthenticatedUser }> {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
    });

    if (!user) {
      throw new InvalidCredentialsException();
    }

    const passwordMatch = await bcrypt.compare(dto.password, user.passwordHash);
    if (!passwordMatch) {
      throw new InvalidCredentialsException();
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const accessToken = this.generateAccessToken(user.id, user.email, user.role);

    return {
      accessToken,
      user: { id: user.id, email: user.email, role: user.role },
    };
  }

  generateAccessToken(userId: string, email: string, role: string): string {
    const payload = { sub: userId, email, role };
    return this.jwtService.sign(payload, {
      secret: process.env.ACCESS_SECRET,
      expiresIn: (process.env.ACCESS_TOKEN_EXPIRY ?? '15m') as unknown as number,
    });
  }

  generateRefreshToken(userId: string): string {
    return this.jwtService.sign(
      { sub: userId },
      {
        secret: process.env.REFRESH_SECRET,
        expiresIn: (process.env.REFRESH_TOKEN_EXPIRY ?? '7d') as unknown as number,
      },
    );
  }

  async validateRefreshToken(token: string): Promise<AuthenticatedUser> {
    try {
      const payload = this.jwtService.verify<{ sub: string }>(token, {
        secret: process.env.REFRESH_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user) {
        throw new InvalidTokenException();
      }

      return { id: user.id, email: user.email, role: user.role };
    } catch {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Invalid or expired refresh token',
      });
    }
  }

  async getMe(userId: string): Promise<AuthenticatedUser & { createdAt: Date; lastLogin: Date | null }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        lastLogin: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException({ statusCode: 401, message: 'User not found' });
    }

    return user;
  }
}

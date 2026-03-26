import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import * as jwt from "jsonwebtoken";

/**
 * JWT Auth Guard – protects routes by validating the Bearer token.
 * Usage: @UseGuards(JwtAuthGuard) on a controller or method.
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new UnauthorizedException("Missing or invalid authorization header");
    }

    const token = authHeader.slice(7);
    const secret = process.env.JWT_SECRET ?? "dev-secret-change-me";

    try {
      const payload = jwt.verify(token, secret);
      (request as any).user = payload;
      return true;
    } catch {
      throw new UnauthorizedException("Invalid or expired token");
    }
  }
}

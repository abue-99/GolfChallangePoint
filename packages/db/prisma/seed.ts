import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const BCRYPT_ROUNDS = 10;

  const users = [
    {
      email: 'admin@test.com',
      password: 'AdminPass123!',
      role: Role.ADMIN,
    },
    {
      email: 'coach@test.com',
      password: 'CoachPass123!',
      role: Role.COACH,
    },
    {
      email: 'player@test.com',
      password: 'PlayerPass123!',
      role: Role.PLAYER,
    },
  ];

  for (const u of users) {
    const passwordHash = await bcrypt.hash(u.password, BCRYPT_ROUNDS);
    await prisma.user.upsert({
      where: { email: u.email },
      update: { passwordHash, role: u.role },
      create: { email: u.email, passwordHash, role: u.role },
    });
    console.log(`Seeded user: ${u.email} (${u.role})`);
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((err) => {
    console.error('Seed failed:', err);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });

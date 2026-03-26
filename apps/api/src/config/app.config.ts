/**
 * Application configuration loaded from environment variables.
 */
export const appConfig = () => ({
  port: parseInt(process.env.API_PORT ?? "4000", 10),
  nodeEnv: process.env.NODE_ENV ?? "development",
  jwtSecret: process.env.JWT_SECRET ?? "dev-secret-change-me",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? "7d",
  databaseUrl: process.env.DATABASE_URL ?? "",
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",
});

export type AppConfig = ReturnType<typeof appConfig>;

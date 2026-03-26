import { createParamDecorator, ExecutionContext } from "@nestjs/common";

/**
 * @CurrentUser() decorator – extracts the authenticated user from the request.
 * Requires JwtAuthGuard to be applied first.
 *
 * Usage:
 *   @Get('me')
 *   @UseGuards(JwtAuthGuard)
 *   getMe(@CurrentUser() user: JwtPayload) { ... }
 */
export const CurrentUser = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';
import { AuthenticatedUser } from '../auth/jwt.strategy';
import { AssignmentsService } from './assignments.service';

@Controller('coach')
@UseGuards(JwtAuthGuard)
export class CoachAssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Get('players/:playerId/assignments')
  listPlayerAssignments(
    @CurrentUser() user: AuthenticatedUser,
    @Param('playerId') playerId: string,
    @Query('status') status?: string,
    @Query('queueOnly') queueOnly?: string,
  ) {
    return this.assignmentsService.listAssignmentsForCoachPlayer(
      user.id,
      user.role as string,
      playerId,
      { status, queueOnly },
    );
  }

  @Post('players/:playerId/assignments')
  assignToPlayer(
    @CurrentUser() user: AuthenticatedUser,
    @Param('playerId') playerId: string,
    @Body() body: { lessonId: string; dueDate?: string; priority?: string },
  ) {
    return this.assignmentsService.assignLessonToPlayer(
      user.id,
      user.role as string,
      playerId,
      body,
    );
  }

  @Post('teams/:teamId/assignments')
  assignToTeam(
    @CurrentUser() user: AuthenticatedUser,
    @Param('teamId') teamId: string,
    @Body() body: { lessonId: string; dueDate?: string; priority?: string },
  ) {
    return this.assignmentsService.assignLessonToTeam(
      user.id,
      user.role as string,
      teamId,
      body,
    );
  }
}

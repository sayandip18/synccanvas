import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { JwtPayload } from '../auth/types/jwt-payload.type';

@UseGuards(JwtAuthGuard)
@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Mutation(() => Board)
  createBoard(
    @Args('input') input: CreateBoardInput,
    @CurrentUser() user: JwtPayload,
  ): Promise<Board> {
    return this.boardService.create(input, user.sub);
  }

  @Mutation(() => Board)
  updateBoard(@Args('input') input: UpdateBoardInput): Promise<Board> {
    return this.boardService.update(input);
  }
}

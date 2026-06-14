import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ColumnService } from './column.service';
import { BoardColumn } from './entities/board-column.entity';
import { CreateColumnInput } from './dto/create-column.input';
import { MoveColumnInput } from './dto/move-column.input';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => BoardColumn)
export class ColumnResolver {
  constructor(private readonly columnService: ColumnService) {}

  @Mutation(() => BoardColumn)
  createColumn(@Args('input') input: CreateColumnInput): Promise<BoardColumn> {
    return this.columnService.create(input);
  }

  @Mutation(() => BoardColumn)
  moveColumn(@Args('input') input: MoveColumnInput): Promise<BoardColumn> {
    return this.columnService.move(input);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardColumn } from './entities/board-column.entity';
import { CreateColumnInput } from './dto/create-column.input';
import { MoveColumnInput } from './dto/move-column.input';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(BoardColumn)
    private readonly columnRepo: Repository<BoardColumn>,
  ) {}

  async create(input: CreateColumnInput): Promise<BoardColumn> {
    const order = await this.columnRepo.countBy({ boardId: input.boardId });
    const column = this.columnRepo.create({ ...input, order });
    return this.columnRepo.save(column);
  }

  async move(input: MoveColumnInput): Promise<BoardColumn> {
    const { id, order } = input;
    const column = await this.columnRepo.findOne({ where: { id } });
    if (!column) throw new NotFoundException(`Column ${id} not found`);
    column.order = order;
    return this.columnRepo.save(column);
  }
}

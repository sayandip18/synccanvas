import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
import { UpdateBoardInput } from './dto/update-board.input';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
  ) {}

  async create(input: CreateBoardInput, ownerId: string): Promise<Board> {
    const order = await this.boardRepo.countBy({ workspaceId: input.workspaceId });
    const board = this.boardRepo.create({ ...input, ownerId, order });
    return this.boardRepo.save(board);
  }

  async update(input: UpdateBoardInput): Promise<Board> {
    const { id, ...fields } = input;
    const board = await this.boardRepo.findOne({ where: { id } });
    if (!board) throw new NotFoundException(`Board ${id} not found`);
    Object.assign(board, fields);
    return this.boardRepo.save(board);
  }
}

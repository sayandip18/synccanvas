import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { CreateCardInput } from './dto/create-card.input';
import { MoveCardInput } from './dto/move-card.input';
import { RepositionCardInput } from './dto/reposition-card.input';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepo: Repository<Card>,
  ) {}

  async create(input: CreateCardInput): Promise<Card> {
    const order = await this.cardRepo.countBy(
      input.columnId
        ? { columnId: input.columnId }
        : { boardId: input.boardId, columnId: IsNull() },
    );
    const card = this.cardRepo.create({ ...input, order });
    return this.cardRepo.save(card);
  }

  async move(input: MoveCardInput): Promise<Card> {
    const { id, order, columnId } = input;
    const card = await this.cardRepo.findOne({ where: { id } });
    if (!card) throw new NotFoundException(`Card ${id} not found`);
    card.order = order;
    if (columnId !== undefined) card.columnId = columnId;
    return this.cardRepo.save(card);
  }

  async reposition(input: RepositionCardInput): Promise<Card> {
    const { id, ...fields } = input;
    const card = await this.cardRepo.findOne({ where: { id } });
    if (!card) throw new NotFoundException(`Card ${id} not found`);
    Object.assign(card, fields);
    return this.cardRepo.save(card);
  }
}

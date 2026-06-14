import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './entities/card.entity';
import { CreateCardInput } from './dto/create-card.input';
import { MoveCardInput } from './dto/move-card.input';
import { RepositionCardInput } from './dto/reposition-card.input';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Resolver(() => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Mutation(() => Card)
  createCard(@Args('input') input: CreateCardInput): Promise<Card> {
    return this.cardService.create(input);
  }

  @Mutation(() => Card)
  moveCard(@Args('input') input: MoveCardInput): Promise<Card> {
    return this.cardService.move(input);
  }

  @Mutation(() => Card)
  repositionCard(@Args('input') input: RepositionCardInput): Promise<Card> {
    return this.cardService.reposition(input);
  }
}

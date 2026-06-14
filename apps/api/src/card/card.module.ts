import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { CardService } from './card.service';
import { CardResolver } from './card.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Card]), AuthModule],
  providers: [CardService, CardResolver],
})
export class CardModule {}

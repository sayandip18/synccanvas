import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardColumn } from './entities/board-column.entity';
import { ColumnService } from './column.service';
import { ColumnResolver } from './column.resolver';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([BoardColumn]), AuthModule],
  providers: [ColumnService, ColumnResolver],
})
export class ColumnModule {}

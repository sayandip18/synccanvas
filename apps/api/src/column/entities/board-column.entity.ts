import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

// Class named BoardColumn to avoid conflict with TypeORM's @Column decorator.
// Exposed as "Column" in the GraphQL schema via @ObjectType('Column').
@ObjectType('Column')
@Entity('board_column') // 'column' is a reserved SQL keyword
export class BoardColumn {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  boardId: string;

  @Field(() => Int)
  @Column({ default: 0 })
  order: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;
}

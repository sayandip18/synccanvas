import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Card {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => Int)
  @Column({ default: 0 })
  order: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  x?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  y?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  height?: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', nullable: true })
  width?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  columnId?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  assigneeId?: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}

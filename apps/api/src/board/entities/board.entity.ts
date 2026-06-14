import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ViewMode } from '../../common/enums/view-mode.enum';

@ObjectType()
@Entity()
export class Board {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field(() => ViewMode)
  @Column({ type: 'text', default: ViewMode.KANBAN })
  viewMode: ViewMode;

  @Field()
  @Column()
  workspaceId: string;

  @Field()
  @Column()
  ownerId: string;

  @Field(() => Int)
  @Column({ default: 0 })
  order: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}

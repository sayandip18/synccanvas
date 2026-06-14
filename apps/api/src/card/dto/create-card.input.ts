import { InputType, Field, ID, Float } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber, MinLength } from 'class-validator';

@InputType()
export class CreateCardInput {
  @Field()
  @IsString()
  @MinLength(1)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ID)
  @IsString()
  boardId: string;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString()
  columnId?: string;

  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString()
  assigneeId?: string;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  x?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  y?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  height?: number;

  @Field(() => Float, { nullable: true })
  @IsOptional()
  @IsNumber()
  width?: number;
}

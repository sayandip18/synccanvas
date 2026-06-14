import { InputType, Field, ID, Float } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class RepositionCardInput {
  @Field(() => ID)
  @IsString()
  id: string;

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

import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsOptional } from 'class-validator';

@InputType()
export class MoveCardInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => Int)
  @IsInt()
  order: number;

  // Provide to move card to a different column; omit to keep the current column.
  @Field(() => ID, { nullable: true })
  @IsOptional()
  @IsString()
  columnId?: string;
}

import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { IsString, IsInt } from 'class-validator';

@InputType()
export class MoveColumnInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field(() => Int)
  @IsInt()
  order: number;
}

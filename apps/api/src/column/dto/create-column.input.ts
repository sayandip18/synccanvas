import { InputType, Field, ID } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class CreateColumnInput {
  @Field()
  @IsString()
  @MinLength(1)
  title: string;

  @Field(() => ID)
  @IsString()
  boardId: string;
}

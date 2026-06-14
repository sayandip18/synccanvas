import { InputType, Field, ID, Int } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum, IsInt, MinLength } from 'class-validator';
import { ViewMode } from '../../common/enums/view-mode.enum';

@InputType()
export class UpdateBoardInput {
  @Field(() => ID)
  @IsString()
  id: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @MinLength(1)
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ViewMode, { nullable: true })
  @IsOptional()
  @IsEnum(ViewMode)
  viewMode?: ViewMode;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsInt()
  order?: number;
}

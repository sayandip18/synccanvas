import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum, MinLength } from 'class-validator';
import { ViewMode } from '../../common/enums/view-mode.enum';

@InputType()
export class CreateBoardInput {
  @Field()
  @IsString()
  @MinLength(1)
  title: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => ViewMode, { nullable: true, defaultValue: ViewMode.KANBAN })
  @IsOptional()
  @IsEnum(ViewMode)
  viewMode?: ViewMode;

  @Field()
  @IsString()
  workspaceId: string;
}

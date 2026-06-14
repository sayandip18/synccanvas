import { registerEnumType } from '@nestjs/graphql';

export enum ViewMode {
  KANBAN = 'KANBAN',
  CANVAS = 'CANVAS',
}

registerEnumType(ViewMode, { name: 'ViewMode' });

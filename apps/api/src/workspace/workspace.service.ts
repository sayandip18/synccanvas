import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workspace } from './entities/workspace.entity';
import { CreateWorkspaceInput } from './dto/create-workspace.input';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspaceRepo: Repository<Workspace>,
  ) {}

  create(input: CreateWorkspaceInput, creatorId: string): Promise<Workspace> {
    const workspace = this.workspaceRepo.create({ ...input, creatorId });
    return this.workspaceRepo.save(workspace);
  }
}

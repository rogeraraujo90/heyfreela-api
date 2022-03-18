import { container } from 'tsyringe';
import ProjectsRepository from '@database/typeorm/repositories/ProjectsRepository';
import IProjectsRepository from '@modules/projects/IProjectsRepository';

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository
);

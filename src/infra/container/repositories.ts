import { container } from 'tsyringe';
import ProjectsRepository from '@database/typeorm/repositories/ProjectsRepository';
import IProjectsRepository from '@modules/projects/IProjectsRepository';
import UsersRepository from '@database/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/IUsersRepository';

container.registerSingleton<IProjectsRepository>(
  'ProjectsRepository',
  ProjectsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

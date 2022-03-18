import { getRepository, Repository } from 'typeorm';
import Project from '../entity/Project';
import IProjectsRepository from '@modules/projects/IProjectsRepository';

/**
 * @class ProjectsRepository
 */
export default class ProjectsRepository implements IProjectsRepository {
  ormRepository: Repository<Project>;

  /**
   * ProjectsRepository constructor
   */
  constructor() {
    this.ormRepository = getRepository<Project>(Project);
  }

  /**
   * @return {Promise<ProjectModel[]>}
   */
  list(): Promise<Project[]> {
    return this.ormRepository.find();
  }
}

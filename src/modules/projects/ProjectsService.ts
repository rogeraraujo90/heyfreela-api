import { injectable, inject } from 'tsyringe';
import ProjectModel from '@modules/projects/ProjectModel';
import IProjectsRepository from '@modules/projects/IProjectsRepository';

@injectable()
/**
 * @class ProjectsService
 */
export default class ProjectsService {
  repository: IProjectsRepository;

  /**
   * @param {IProjectsRepository} repository
   */
  constructor(@inject('ProjectsRepository') repository: IProjectsRepository) {
    this.repository = repository;
  }

  /**
   * @return {Promise<IProject>}
   */
  async list(): Promise<ProjectModel[]> {
    return this.repository.list();
  }
}

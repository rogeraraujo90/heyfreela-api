import ProjectModel from './ProjectModel';

export default interface IProjectsRepository {
  list(): Promise<ProjectModel[]>;
}

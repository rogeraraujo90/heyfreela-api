import ProjectModel from '@modules/projects/ProjectModel';

export default interface UserModel {
  id: number;
  nickname: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  ownedProjects: ProjectModel[];
  workingProjects: ProjectModel[];
}

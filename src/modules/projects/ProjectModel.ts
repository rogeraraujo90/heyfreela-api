import UserModel from '@modules/users/UserModel';

export default interface ProjectModel {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  owner: UserModel;
}

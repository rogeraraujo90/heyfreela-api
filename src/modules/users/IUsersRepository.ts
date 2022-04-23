import UserModel from './UserModel';

export default interface IUsersRepository {
  find(id: number): Promise<UserModel>;
}

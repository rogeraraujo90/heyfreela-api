import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/IUsersRepository';
import UserModel from '@modules/users/UserModel';

@injectable()
/**
 * @class UsersService
 */
export default class UsersService {
  repository: IUsersRepository;

  /**
   * @param {IUsersRepository} repository
   */
  constructor(@inject('UsersRepository') repository: IUsersRepository) {
    this.repository = repository;
  }

  /**
   * @param {number} id
   * @return {Promise<User>}
   */
  async find(id: number): Promise<UserModel> {
    return this.repository.find(id);
  }
}

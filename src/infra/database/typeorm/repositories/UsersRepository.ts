import IUsersRepository from '@modules/users/IUsersRepository';
import User from '../entity/User';
import { getRepository } from 'typeorm';

/**
 * @class UsersRepository
 */
export default class UsersRepository implements IUsersRepository {
  ormRepository = getRepository<User>(User);

  /**
   * @param {Number} id
   * @return {Promise<User>}
   */
  find(id: number): Promise<User> {
    return this.ormRepository.findOneOrFail(id);
  }
}

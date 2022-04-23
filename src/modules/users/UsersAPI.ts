import { Request, Response } from 'express';
import UsersService from './UsersService';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';

/**
 * @class UsersAPI
 */
export default class UsersAPI {
  /**
   * @param {Request} request
   * @param {Response} response
   */
  async show(request: Request, response: Response) {
    const service = container.resolve(UsersService);
    const user = await service.find(Number(request.params.id));

    return response.json(instanceToInstance(user));
  }
}

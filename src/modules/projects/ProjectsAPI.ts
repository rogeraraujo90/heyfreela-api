import { Request, Response } from 'express';
import ProjectsService from './ProjectsService';
import { container } from 'tsyringe';

/**
 * @class ProjectsAPI
 */
export default class ProjectsAPI {
  /**
   * @param {Request} request
   * @param {Response} response
   */
  async index(request: Request, response: Response) {
    const service = container.resolve(ProjectsService);
    const projects = await service.list();

    return response.json(projects);
  }
}

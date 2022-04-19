import request from 'supertest';
import { Repository } from 'typeorm';
import { MockProxy } from 'jest-mock-extended';
import app from '@app';
import { repositoryMock } from '../../../__mocks__/typeorm';

jest.mock('typeorm');

describe('## Projects Module ##', function () {
  const repository = repositoryMock as MockProxy<Repository<any>>;

  test('it list all projects', async function () {
    const project = {
      name: 'I am a project',
      description: 'Description project 1',
      technologies: ['node'],
    };

    repository.find.mockResolvedValue([project]);
    const response = await request(app).get('/projects').expect(200);

    expect(response.body).toEqual([project]);
  });
});

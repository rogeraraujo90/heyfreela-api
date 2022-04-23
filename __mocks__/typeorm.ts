import { mock } from 'jest-mock-extended';
import { Repository } from 'typeorm';

export const repositoryMock = mock<Repository<any>>();
export const createConnection = jest.fn().mockReturnValue({
  catch: jest.fn(),
});
export const getRepository = () => repositoryMock;
export const PrimaryGeneratedColumn = () => jest.fn;
export const Column = () => jest.fn;
export const OneToMany = () => jest.fn;
export const ManyToMany = () => jest.fn;
export const ManyToOne = () => jest.fn;
export const JoinTable = () => jest.fn;
export const CreateDateColumn = () => jest.fn;
export const UpdateDateColumn = () => jest.fn;
export const Entity = () => jest.fn;

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import ProjectModel from '@modules/projects/ProjectModel';

@Entity()
/**
 * The main entity. Represents a purpose of work that can created by anyone
 *
 * @class Project
 */
export default class Project implements ProjectModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text')
  description!: string;

  @Column()
  name!: string;
}

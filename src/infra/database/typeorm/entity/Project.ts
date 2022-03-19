import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @Column({ type: 'text', nullable: false })
  description!: string;

  @Column({ nullable: false })
  name!: string;

  @Column({ type: 'json' })
  technologies!: String[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import ProjectModel from '@modules/projects/ProjectModel';
import UserModel from '@modules/users/UserModel';
import User from '@database/typeorm/entity/User';

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

  @ManyToOne((type) => User, { nullable: false, eager: true })
  owner!: UserModel;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

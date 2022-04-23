import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import UserModel from '@modules/users/UserModel';
import ProjectModel from '@modules/projects/ProjectModel';
import Project from '@database/typeorm/entity/Project';
import { Exclude } from 'class-transformer';

@Entity()
/**
 * Represents a user, which can be a project owner and/or a developer
 */
export default class User implements UserModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ nullable: false })
  email!: string;

  @Column({ nullable: false })
  nickname!: string;

  @Column({ nullable: false })
  @Exclude()
  password!: string;

  @OneToMany(() => Project, (project) => project.owner)
  ownedProjects!: ProjectModel[];

  @ManyToMany(() => Project)
  @JoinTable()
  workingProjects!: ProjectModel[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

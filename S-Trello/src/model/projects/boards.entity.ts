import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  Int32,
  ManyToMany,
  DeleteDateColumn,
} from "typeorm";
import { DateTimeEntity } from "../base/datetime.entity";
import { Projects } from "./projects.entity";
import { Lists } from "./lists.entity";
import { BoardMembers } from "./boardMembers.entity";
import { Users } from "../users.entity";
import {VisibilityType } from "../base/enumType.entity";

@Entity()
export class Boards extends DateTimeEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ type: "varchar", length: 255 })
  public title: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  public description: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  public coverUrl: string;

  @Column({ type: "enum", enum: VisibilityType, default: VisibilityType.WORKSPACE})
  public visibility: VisibilityType;

  @Column({ type: "boolean", default: false })
  public is_archive: boolean;
  
  @ManyToOne(() => Users, (user) => user.boards)
  user: Users

  @OneToMany(() => Lists, (lists) => lists.boardID, {cascade: true})
  lists: Lists[];

  @OneToMany(() => BoardMembers, (boardMembers) => boardMembers.boardID, {cascade: true})
  boardMembers: BoardMembers[];
  
  @ManyToOne(() => Projects, (projects) => projects.boards)
  project: Projects;

  @DeleteDateColumn()
    deletedAt?: Date;
}

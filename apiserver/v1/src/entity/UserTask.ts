import { Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "./Task";
import { User } from "./User";


@Entity("tb_user_task")
export class UserTask {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @OneToOne(()=> User)
    @JoinTable()
    user_id!: User

    @OneToOne(()=> Task)
    @JoinTable()
    task_id!: Task
}
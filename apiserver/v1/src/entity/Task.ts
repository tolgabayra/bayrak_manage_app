import { Max, Min } from "class-validator";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";



@Entity("tb_tasks")
export class Task{
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column()
    title!:string

    @Column()
    description!:string

    @Min(1)
    @Max(5)
    @Column()
    priority!: number

    @ManyToMany(()=> User)
    users!: User[]

}
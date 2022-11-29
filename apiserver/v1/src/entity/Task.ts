import { Max, Min } from "class-validator";
import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";



@Entity("tb_tasks")
export class Task{
    @PrimaryColumn()
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    title!:string

    @Column()
    description!:string

    @Min(1)
    @Max(5)
    @Column()
    priority!: number

 

}
import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, JoinTable, ManyToMany } from "typeorm"
import {
    Length,
    IsEmail,
    IsFQDN,
    Min,
    Max,
  } from 'class-validator';
import { Task } from "./Task";
@Entity("tb_users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Min(3)
    @Max(12)
    @Column()
    username!: string


    @Column()
    @IsEmail()
    @Length(6, 32)
    email!: string


    @Column()
    password!: string

    @ManyToMany(()=> Task,{cascade: true})
    @JoinTable()
    tasks!: Task[]
  
}
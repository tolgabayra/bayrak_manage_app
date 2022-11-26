import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "./entity/Task"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities:[
        User,
        Task
    ],
    subscribers: [],
    migrations: []
})
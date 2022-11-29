import { TaskService } from "../service/TaskService";
import { Request, Response } from "express";


export class TaskController {

    private taskService = new TaskService


    public createTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const user_id = req.user.payload.id
            const newTask = await this.taskService.create(req.body, user_id)
            res.status(201).json(newTask)
        } catch (error) {
            console.log(error);
            
            res.status(500).json(error)
        }
    }


    public deleteTask = async (req: Request, res: Response): Promise<void> => {
        try {
            await this.taskService.delete(req.params.id)
            res.status(200).json({ "message": "User has been deleted." })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public updateTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const data = req.body
            await this.taskService.update(req.params.id, data)
            res.status(200).json({ "message": "Task has been updated." })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public getTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const task = await this.taskService.show(req.params.id)
            res.status(200).json(task)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    public getAllTask = async (req: Request, res: Response): Promise<void> => {
        try {
            const allTasks = await this.taskService.list()
            res.status(200).json(allTasks)
        } catch (error) {
            res.status(500).json(error)
        }
    }


}
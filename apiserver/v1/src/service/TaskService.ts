import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";


export class TaskService {
    private taskRepository = AppDataSource.getRepository(Task)


    /**
     * create
     */
    public create(data: Task) {
        return this.taskRepository.save(data)
    }

    /**
     * delete
     */
    public delete(id: number) {
        
    }

    /**
     * update
     */
    public update() {
        
    }

    /**
     * show
     */
    public show() {
        
    }

    /**
     * list
     */
    public list() {
        
    }
}
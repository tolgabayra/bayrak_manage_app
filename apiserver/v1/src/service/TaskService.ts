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
    public delete(id: any) {
        const nowTask = this.taskRepository.findOneBy({
            id: id
        })
        return this.taskRepository.remove(nowTask as any)
    }

    /**
     * update
     */
    public update(id: any, data: Task) {
        const nowUser = this.taskRepository.findOneBy({
            id: id
        })
        return this.taskRepository.save({
            ...nowUser,
            ...data
        })
    }

    /**
     * show
     */
    public show(id: any) {
        return this.taskRepository.findOneBy({
            id: id
        })
    }

    /**
     * list
     */
    public list() {
        return this.taskRepository.find()
    }
}
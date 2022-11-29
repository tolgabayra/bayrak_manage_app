import { AppDataSource } from "../data-source";
import { Task } from "../entity/Task";


export class TaskService {
    private taskRepository = AppDataSource.getRepository(Task)


    /**
     * create
     */
    public async create(data: Task) {

        const result = await this.taskRepository.save(data)
        console.log(result);
        
        const r = AppDataSource.createQueryBuilder()
        .insert()
        .into("tb_users_tasks_tb_tasks")
        .values([{tbUsersId: "3dfd8cce-0a19-45f3-b9df-c229cd0c8c65", tbTasksId: result.id}])
        .execute()
        return result
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
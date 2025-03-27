import { injectable, inject } from "inversify"
import { UserController } from "../user/user.controller"
import { IPartialTaskWithId, ITask } from "./task.interface"
import { Document } from "mongoose"
import { Request, Response } from "express"
import { TaskService } from "./task.service"
import { UpdateTaskProvider } from "./providors/updateTask.provider"
import { matchedData } from "express-validator"
import { ITaskPagination } from "./interfaces/taskPagination.interface"
import { GetTasksProvider } from "./providors/getTasks.provider"

@injectable()
export class TasksController {
    constructor(
        @inject(UserController) private userController: UserController,
        @inject(TaskService) private taskService : TaskService,
        @inject(UpdateTaskProvider) private updateTaskProvidor : UpdateTaskProvider,
        @inject(GetTasksProvider) private getTasksProvider : GetTasksProvider,
    ) {}

    public async handleGetTasks(req: Request, res: Response) {
        const validatedData: Partial<ITaskPagination> = matchedData(req);
        try{
            const tasks: { data: ITask[]; meta: {} } = await this.getTasksProvider.findAllTasks(validatedData)
            return tasks;
        } catch (error: any){
            throw new Error(error);
        } 
    }

    public async handlePostTasks(req: Request<{},{},ITask>, res: Response) {
        const validatedData: ITask = matchedData(req);
        try {
            return  await this.taskService.createTask(validatedData);

        } catch (error: any){
            throw new Error(error);
        }
    }

    public async handlePatchTasks(
        req: Request<{},{},IPartialTaskWithId>,
        res: Response
    ): Promise<Document> {
        const validatedData: IPartialTaskWithId = matchedData(req);
        try {
            return await this.updateTaskProvidor.updateTask(validatedData);
        }catch (error: any) {
            throw new Error(error);
        }
    }
}
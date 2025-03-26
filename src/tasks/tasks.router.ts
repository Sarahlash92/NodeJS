import { Router, Response, Request } from "express";
import { TasksController } from "./tasks.controller";
import { injectable, inject } from "inversify";
import { IPartialTaskWithId, ITask } from "./task.interface";
import { createTaskValidator } from "./validators/createTask.validator";
import { validationResult } from "express-validator";
import { getTaskValidator } from "./validators/getTasks.validator";
import { StatusCodes } from "http-status-codes";


@injectable()
export class TasksRouter {
    public router: Router;

    constructor(
        @inject(TasksController) private taskController: TasksController) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get("/", getTaskValidator, 
            async (req: Request, res: Response) => {
            const result = validationResult(req);    
            const allTasks = await this.taskController.handleGetTasks(req, res);
            res.json(allTasks);
        })

        this.router.post("/create", createTaskValidator,
             async(req: Request<{},{},ITask>, res: Response) => {
                const result = validationResult(req);
                if (result.isEmpty()) {
                    const newTask = await this.taskController.handlePostTasks(req, res);
                    res.status(StatusCodes.CREATED).json(newTask);
                } else {
                    res.status(StatusCodes.BAD_REQUEST).json(result.array());
                }
        })

        this.router.patch("/update", async(req: Request<{},{},IPartialTaskWithId>, res: Response) => {
            const updatedTask = await this.taskController.handlePatchTasks(req, res);
            res.json(updatedTask);
        })
    }
}
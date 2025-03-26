import { Router, Response, Request } from "express";
import { TasksController } from "./tasks.controller";
import { injectable, inject } from "inversify";
import { IPartialTaskWithId, ITask } from "./task.interface";

@injectable()
export class TasksRouter {
    public router: Router;

    constructor(
        @inject(TasksController) private taskController: TasksController) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get("/", async (req: Request, res: Response) => {
            const allTasks = await this.taskController.handleGetTasks(req, res);
            res.json(allTasks);
        })
        this.router.post("/create", async(req: Request<{},{},ITask>, res: Response) => {
            const newTask = await this.taskController.handlePostTasks(req, res);
            res.json(newTask);
        })
        this.router.patch("/update", async(req: Request<{},{},IPartialTaskWithId>, res: Response) => {
            const updatedTask = await this.taskController.handlePatchTasks(req, res);
            res.json(updatedTask);
        })
    }
}
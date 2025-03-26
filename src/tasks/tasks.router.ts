import { Router, Response, Request } from "express";
import { TasksController } from "./tasks.controller";
import { injectable, inject } from "inversify";

@injectable()
export class TasksRouter {
    public router: Router;

    constructor(
        @inject(TasksController) private taskController: TasksController) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get("/", (req: Request, res: Response) => {
            const newTask = this.taskController.handleGetTasks();
            res.json(newTask);
        })
        this.router.post("/create", (req: Request, res: Response) => {
            const newTask = this.taskController.handlePostTasks();
            res.json(newTask);
        })
        this.router.patch("/update", (req: Request, res: Response) => {
            const newTask = this.taskController.handlePatchTasks();
            res.json(newTask);
        })
    }
}
import { Router, Response, Request } from "express";
import { container } from "../config/container";
import { TasksController } from "./tasks.controller";

export const taskRouter:Router = Router();

const taskController: TasksController = 
    container.get<TasksController>(TasksController);


taskRouter.post("/create", (req: Request, res: Response) => {
    const newTask = taskController.createTask();
    res.json(newTask)
});
import { Container } from "inversify";
import { TasksController } from "../tasks/tasks.controller";
import { taskRouter } from "../tasks/tasks.router";

export const container: Container = new Container();

container.bind(TasksController).toSelf().inRequestScope()
container.bind(taskRouter).toSelf().inRequestScope()

import { Container } from "inversify";
import { TasksController } from "../tasks/tasks.controller";
import { TasksRouter } from "../tasks/tasks.router";
import { UserController } from "../user/user.controller";

export const container: Container = new Container();

container.bind(TasksController).toSelf().inRequestScope()
container.bind(TasksRouter).toSelf().inRequestScope()
container.bind(UserController).toSelf().inRequestScope

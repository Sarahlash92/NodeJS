import { injectable, inject } from "inversify"
import { UserController } from "../user/user.controller"

@injectable()
export class TasksController {
    constructor(@inject(UserController)private userController: UserController) {}

    public handlePostTasks() {
        return [{
            title: "this is a title",
            description: "Task description",
        }]
    }

    public handleGetTasks() {
        return [{

        }]
    }

    public handlePatchTasks() {
        return [{

        }]
    }
}
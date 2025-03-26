import { injectable } from "inversify"

@injectable()
export class TasksController {
    constructor() {}

    public createTask() {
        return {
            title: "this is a title",
            description: "Task description",
        }
    }
}
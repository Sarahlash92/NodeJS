export interface ITask {
    title : string;
    description: string;
    status: "todo" | "inProgress" | "Completed";
    priority: "low" | "normal" | "high";
    dueDate: Date;
}

export interface IPartialTaskWithId extends Partial<ITask>{
  _id: string;
}
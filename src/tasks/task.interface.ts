export interface ITask {
    title : string;
    description: string;
    status: "todo" | "inProgress" | "Completed";
    priority: "low" | "normal" | "high";
    dueDate: Date;
}
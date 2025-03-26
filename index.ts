import "reflect-metadata";

import express, {Request, Response } from "express";
import { taskRouter } from "./src/tasks/tasks.router";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response ) => {
    res.send("Express application");
});

app.use("/tasks", taskRouter);

app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`);
});

 
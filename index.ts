import "reflect-metadata";

import express, {Request, Response } from "express";
import { addRoutes } from "./src/config/routes.config";

const app = express();
const port = 3001;

app.get("/", (req: Request, res: Response ) => {
    res.send("Express application");
});

addRoutes(app);

app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`);
});

 
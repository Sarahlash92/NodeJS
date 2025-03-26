import "reflect-metadata";

import express, {Request, Response } from "express";
import { addRoutes } from "./src/config/routes.config";
import mongoose from "mongoose";
import * as dotenv from "dotenv"

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
addRoutes(app);

async function bootstrap() {

    if (!process.env.DATABASE_URL) {
        throw new Error("Cannot read env variables");
    }
    try {
        await mongoose.connect(
            process.env.DATABASE_URL,
            {dbName: process.env.DATABASE_NAME
        }
    );
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server running at http:localhost:${port}`);
    });
    } catch(error){
        console.log(error);
        process.exit(1);
    }
}

bootstrap();

 
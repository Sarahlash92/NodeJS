import express, {Request, Response, Express} from "express";

const app = express();
const port = 3001;

app.get("/", (req, res ) => {
    res.send("Express application");
});

app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`);
});


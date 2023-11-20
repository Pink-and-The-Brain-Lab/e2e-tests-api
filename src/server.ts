import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(clientErrorHandle);

app.listen(3333, () => console.log('users API started on port 3333!'));

function clientErrorHandle(error: Error, request: Request, response: Response, next: NextFunction) {
    return response.status(500).json({
        status: 'Error',
        message: error.message || 'Internal server error.'
    });
}

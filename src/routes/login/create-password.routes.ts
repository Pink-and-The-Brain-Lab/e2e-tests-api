import { NextFunction, Request, Response, Router } from "express";
import { ICreatePassword } from "../interfaces/create-password.interface";
const createPasswordRouter = Router();

createPasswordRouter.post('/', async (request: Request<ICreatePassword>, response: Response, next: NextFunction) => {
    try {
        const { password } = request.body;
        if (password === '1234abcd') throw new Error('Invalid password');
        return response.json({});
    } catch (error) {
        next(error)
    }
});

export default createPasswordRouter;
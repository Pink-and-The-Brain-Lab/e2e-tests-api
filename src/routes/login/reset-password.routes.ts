import { NextFunction, Request, Response, Router } from "express";
import { IResetPassword } from "../interfaces/reset-password.interface";
const resetPasswordRouter = Router();

resetPasswordRouter.post('/', async (request: Request<IResetPassword>, response: Response, next: NextFunction) => {
    try {
        const { email } = request.body;
        if (email === 'error@mail.com') throw new Error('Invalid email');
        return response.json({});
    } catch (error) {
        next(error)
    }
});

export default resetPasswordRouter;

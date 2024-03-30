import { NextFunction, Request, Response, Router } from "express";
import { ISignup } from "../interfaces/signup.interface";
const signupRouter = Router();

signupRouter.post('/', async (request: Request<ISignup>, response: Response, next: NextFunction) => {
    try {
        const { email } = request.body;
        if (email === 'error@mail.com') throw new Error('User already exists');
        return response.json({});
    } catch (error) {
        next(error)
    }
});

export default signupRouter;

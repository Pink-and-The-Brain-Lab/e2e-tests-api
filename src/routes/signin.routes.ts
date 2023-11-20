import { NextFunction, Request, Response, Router } from "express";
import { ISignin } from "./interfaces/signin.interface";

const signinRouter = Router();

signinRouter.post('/', async (request: Request<ISignin>, response: Response, next: NextFunction) => {
    try {
        const { email } = request.body;
        if (email === 'error@mail.com') throw new Error('Invalid user or pass');
        return response.json({ user: 'e2e test', token: '123456' });
    } catch (error) {
        next(error)
    }
});

export default signinRouter;
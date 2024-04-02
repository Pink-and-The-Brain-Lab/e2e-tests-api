import { NextFunction, Request, Response, Router } from "express";
const checkEmailDisponibilityRouter = Router();

checkEmailDisponibilityRouter.post('/', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { email } = request.body;
        if (email === 'error@mail.com') throw new Error('Email unavailable');
        return response.json({ isAvailable: true });
    } catch (error) {
        next(error)
    }
});

export default checkEmailDisponibilityRouter;

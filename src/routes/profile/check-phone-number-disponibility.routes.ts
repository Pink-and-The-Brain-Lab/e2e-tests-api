import { NextFunction, Request, Response, Router } from "express";
const checkPhoneNumberDisponibilityRouter = Router();

checkPhoneNumberDisponibilityRouter.post('/', async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { phoneNumber } = request.body;
        if (phoneNumber === '+55 99 99999-9999') throw new Error('Cellphone number unavailable');
        return response.json({ isAvailable: true });
    } catch (error) {
        next(error)
    }
});

export default checkPhoneNumberDisponibilityRouter;

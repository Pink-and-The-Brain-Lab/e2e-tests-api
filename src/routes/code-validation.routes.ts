import { NextFunction, Request, Response, Router } from "express";
import { IValidationToken } from "./interfaces/validation-token.interface";

const codeValidationRouter = Router();

codeValidationRouter.post('/', async (request: Request<IValidationToken>, response: Response, next: NextFunction) => {
    try {
        const { token } = request.body;
        if (token === '000000') throw new Error('Invalid code');
        return response.json({});
    } catch (error) {
        next(error)
    }
});

export default codeValidationRouter;
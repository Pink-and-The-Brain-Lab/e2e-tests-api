import { NextFunction, Request, Response, Router } from "express";
const createProfileRouter = Router();

createProfileRouter.post('/', async (request: Request, response: Response, next: NextFunction) => {
    return response.json({ profileId: '123456' });
});

export default createProfileRouter;

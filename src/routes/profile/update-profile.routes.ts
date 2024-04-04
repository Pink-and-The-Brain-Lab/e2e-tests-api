import { NextFunction, Request, Response, Router } from "express";
const updateProfileRouter = Router();

updateProfileRouter.get('/', async (request: Request, response: Response, next: NextFunction) => {
    return response.json({});
});

export default updateProfileRouter;
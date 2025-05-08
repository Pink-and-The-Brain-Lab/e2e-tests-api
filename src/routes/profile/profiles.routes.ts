import { NextFunction, Request, Response, Router } from "express";
const profilesRouter = Router();

profilesRouter.get('/', async (request: Request, response: Response, next: NextFunction) => {
    return response.json([{ validated: true }]);
});

export default profilesRouter;

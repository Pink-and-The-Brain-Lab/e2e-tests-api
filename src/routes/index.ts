import { Router } from "express";
import signinRouter from "./signin.routes";
import resetPasswordRouter from "./reset-password.routes";
import codeValidationRouter from "./code-validation.routes";
import createPasswordRouter from "./create-password.routes";
import signupRouter from "./signup.routes";

const routes = Router();

routes.use('/sign-in', signinRouter);
routes.use('/reset-password', resetPasswordRouter);
routes.use('/token-validation', codeValidationRouter);
routes.use('/create-password', createPasswordRouter);
routes.use('/sign-up', signupRouter);

export default routes;
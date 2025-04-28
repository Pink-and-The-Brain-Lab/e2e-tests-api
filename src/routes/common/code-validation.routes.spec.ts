import request from "supertest";
import express, { Application } from "express";
import codeValidationRouter from "./code-validation.routes";

describe("codeValidationRouter", () => {
    let app: Application;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use("/code-validation", codeValidationRouter);
        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(400).json({ error: err.message });
        });
    });

    it("should return 400 if the token is '000000'", async () => {
        const response = await request(app)
            .post("/code-validation")
            .send({ token: "000000" });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid code" });
    });

    it("should return 200 and an empty object for valid tokens", async () => {
        const response = await request(app)
            .post("/code-validation")
            .send({ token: "123456" });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

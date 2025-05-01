import request from "supertest";
import express, { Application } from "express";
import resetPasswordRouter from "./reset-password.routes";

describe("resetPasswordRouter", () => {
    let app: Application;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use("/reset-password", resetPasswordRouter);

        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(400).json({ error: err.message });
        });
    });

    it("should return 400 if the email is 'error@mail.com'", async () => {
        const response = await request(app)
            .post("/reset-password")
            .send({ email: "error@mail.com" });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid email" });
    });

    it("should return 200 and an empty object for valid emails", async () => {
        const response = await request(app)
            .post("/reset-password")
            .send({ email: "valid@mail.com" });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

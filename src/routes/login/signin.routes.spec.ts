import request from "supertest";
import express, { Application } from "express";
import signinRouter from "./signin.routes";

describe("signinRouter", () => {
    let app: Application;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use("/signin", signinRouter);

        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(400).json({ error: err.message });
        });
    });

    it("should return 400 if the email is 'error@mail.com'", async () => {
        const response = await request(app)
            .post("/signin")
            .send({ email: "error@mail.com", password: "password123" });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid user or pass" });
    });

    it("should return 200 and a user object with token for valid email", async () => {
        const response = await request(app)
            .post("/signin")
            .send({ email: "valid@mail.com", password: "password123" });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ user: "e2e test", token: "123456" });
    });
});

import request from "supertest";
import express, { Application } from "express";
import signupRouter from "./signup.routes";

describe("signupRouter", () => {
    let app: Application;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use("/signup", signupRouter);

        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(400).json({ error: err.message });
        });
    });

    it("should return 400 if the email is 'error@mail.com'", async () => {
        const response = await request(app)
            .post("/signup")
            .send({ email: "error@mail.com" });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "User already exists" });
    });

    it("should return 200 for a valid email", async () => {
        const response = await request(app)
            .post("/signup")
            .send({ email: "valid@mail.com" });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

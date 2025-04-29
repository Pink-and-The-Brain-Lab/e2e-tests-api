import request from "supertest";
import express, { Application } from "express";
import createPasswordRouter from "./create-password.routes";

describe("createPasswordRouter", () => {
    let app: Application;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use("/create-password", createPasswordRouter);

        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(400).json({ error: err.message });
        });
    });

    it("should return 400 if the password is '1234abcd'", async () => {
        const response = await request(app)
            .post("/create-password")
            .send({ password: "1234abcd" });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Invalid password" });
    });

    it("should return 200 and an empty object for valid passwords", async () => {
        const response = await request(app)
            .post("/create-password")
            .send({ password: "securePassword123" });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

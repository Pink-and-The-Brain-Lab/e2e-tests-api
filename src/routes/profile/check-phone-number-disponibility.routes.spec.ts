import request from "supertest";
import express, { Application } from "express";
import checkPhoneNumberDisponibilityRouter from "./check-phone-number-disponibility.routes";
describe("checkPhoneNumberDisponibilityRouter", () => {
    let app: Application;

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use("/check-phone", checkPhoneNumberDisponibilityRouter);

        app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
            res.status(400).json({ error: err.message });
        });
    });

    it("should return 400 if the phone number is '+55 99 99999-9999'", async () => {
        const response = await request(app)
            .post("/check-phone")
            .send({ phoneNumber: "+55 99 99999-9999" });

        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Cellphone number unavailable" });
    });

    it("should return 200 and isAvailable: true for a valid phone number", async () => {
        const response = await request(app)
            .post("/check-phone")
            .send({ phoneNumber: "+55 11 98888-8888" });

        expect(response.status).toBe(200);
        expect(response.body).toEqual({ isAvailable: true });
    });
});

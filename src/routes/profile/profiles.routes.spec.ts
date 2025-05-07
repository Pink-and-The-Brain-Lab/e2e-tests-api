import request from "supertest";
import express, { Application } from "express";
import profilesRouter from "./profiles.routes";

describe("profilesRouter", () => {
  let app: Application;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/profiles", profilesRouter);
  });

  it("should return 200 and an array of profiles", async () => {
    const response = await request(app).get("/profiles");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ validated: true }]);
  });
});

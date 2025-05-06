import request from "supertest";
import express, { Application } from "express";
import createProfileRouter from "./create-profile.routes";

describe("createProfileRouter", () => {
  let app: Application;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/create-profile", createProfileRouter);
  });

  it("should return 200 and a profileId", async () => {
    const response = await request(app)
      .post("/create-profile")
      .send({});
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ profileId: "123456" });
  });
});

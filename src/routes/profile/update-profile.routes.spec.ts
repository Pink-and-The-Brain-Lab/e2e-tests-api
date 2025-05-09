import request from "supertest";
import express, { Application } from "express";
import updateProfileRouter from "./update-profile.routes";

describe("updateProfileRouter", () => {
  let app: Application;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use("/update-profile", updateProfileRouter);
  });

  it("should return 200 and an empty object", async () => {
    const response = await request(app).get("/update-profile");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({});
  });
});

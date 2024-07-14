import supertest from "supertest";
import app from "../app";

/* describe("POST /user", () => {
  it("should create a new user", async () => {
    const response = await supertest(app)
      .post("/user")
      .send({ name: "Yashwanth" });

    expect(response.status).toBe(201);
    expect(response.body.message).toEqual("User Yashwanth created");
  });
}); */

describe("POST /user", () => {
  it("should create a new user", async () => {
    const response = await supertest(app)
      .post("/user")
      .send({ name: "John Doe" });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "User John Doe created" });
  });
});

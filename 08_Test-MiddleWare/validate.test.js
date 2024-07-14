import supertest from "supertest";
import app from "../app";

test("GET /secure with valid token", async () => {
  const response = await supertest(app)
    .get("/secure")
    .set("Authorization", "ThisIsvalidToken");

  expect(response.status).toBe(200);
  expect(response.text).toBe("You are Authorized");
});

test("GET /secure without token", async () => {
  const response = await supertest(app).get("/secure");

  expect(response.status).toBe(401);
  expect(response.text).toBe("Unauthorized");
});

test("GET /secure with invalid token", async () => {
  const response = await supertest(app)
    .get("/secure")
    .set("Authorization", "ThisIsNOTvalidToken");

  expect(response.status).toBe(401);
  expect(response.text).toBe("Unauthorized");
});

import request from "supertest";
import app from "../app";

test("GET /hello", async () => {
  const response = await request(app).get("/hello");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello World!");
});

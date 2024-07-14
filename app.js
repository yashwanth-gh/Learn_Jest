import express from "express";
import { validate } from "./08_Test-MiddleWare/validate.middleware";
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

app.post("/user", (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(201).send({ message: `User ${name} created` });
  } else {
    res.status(400).send({ error: "Name is required" });
  }
});

app.get("/secure", validate, (req, res) => {
  res.status(200).send("You are Authorized");
});

export default app;

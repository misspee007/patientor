import express from "express";
import cors from "cors";
import diagnosesRouter from "./routes/diagnoses";
import patientsRouter from "./routes/patients";

const app = express();

app.use(cors());

app.get("/api/ping", (_req, res) => {
	res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
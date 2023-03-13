import express from "express";

// Initializing database
import "./models/index.js";

// Importing routes
import authenticated from "./routes/authenticated";

const app = express();

app.use(express.json());
app.use("/api", authenticated);

export default app;

import express, { Request } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import "firebase-functions/logger/compat";

// Initializing database
import "./models/index.js";

// Importing routes
import authenticated from "./routes/authenticated.js";

const server = express();

const allowlist = ["http://localhost:5173", "*"];

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
  cors({
    origin: allowlist
  })
);

server.use("/api", authenticated);
server.get("/health", (req, res) => {
  res.send("Server Up and running!");
});

server.get("*", function (req, res) {
  res.status(404).send("Not found");
});
export default server;

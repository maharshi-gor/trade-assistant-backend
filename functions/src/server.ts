import express, { Request } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";

// Initializing database
import "./models/index.js";

// Importing routes
import authenticated from "./routes/authenticated.js";

const server = express();

const allowlist = ["http://localhost:5173", "*"];

const corsOptionsDelegate = (req: Request, callback: Function) => {
  var corsOptions;
  if (req.header("Origin") && allowlist.indexOf(req.header("Origin")!) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors({ origin: true }));

server.use("/api", authenticated);
server.get("/health", (req, res) => {
  res.send("Server Up and running!");
});
export default server;

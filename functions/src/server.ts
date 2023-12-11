import express, { Request } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import "firebase-functions/logger/compat";
import { HttpsProxyAgent } from "https-proxy-agent";

// Initializing database
import "./models/index.js";

// Importing routes
import authenticated from "./routes/authenticated.js";
import axios from "axios";

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

server.get("/ip", async function (req, res) {
  axios.create({
    httpsAgent: new HttpsProxyAgent("https://14.139.110.152:3128"),
    proxy: false
  });
  const response = await axios.get("https://api.ipify.org?format=json");
  res.send(await response.data);
});
export default server;

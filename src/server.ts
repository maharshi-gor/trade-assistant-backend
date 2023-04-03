import express, { Request } from "express";
import cors, { CorsOptions } from "cors";

// Initializing database
import "./models/index.js";

// Importing routes
import authenticated from "./routes/authenticated";

const app = express();

app.use(express.json());

const allowlist = ["http://localhost:5173"];

const corsOptionsDelegate = (req: Request, callback: Function) => {
  var corsOptions;
  if (req.header("Origin") && allowlist.indexOf(req.header("Origin")!) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));
app.use("/api", authenticated);

export default app;

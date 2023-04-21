import server from "./server";
import * as functions from "firebase-functions";

export const app = functions.https.onRequest(server);

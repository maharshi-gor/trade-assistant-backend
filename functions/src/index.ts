import server from "./server";
import * as functions from "firebase-functions";

exports.app = functions.https.onRequest(server);

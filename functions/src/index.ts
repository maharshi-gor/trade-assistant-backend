import server from "./server";
import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2/options";

// let runTimeOpts = {
//   vpcConnector: "e-invoice-connector",
//   vpcConnectorEgressSettings: "ALL_TRAFFIC"
// } as functions.RuntimeOptions;

setGlobalOptions({
  region: "asia-south1",
  vpcConnector: "e-invoice",
  vpcConnectorEgressSettings: "ALL_TRAFFIC"
});
exports.app = onRequest(server);

import app from "./server";

const port = process.env.PORT || 8100;

const startServer = () => {
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
};

startServer();

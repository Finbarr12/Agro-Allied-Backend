import express, { Application } from "express";
import { DbConnect } from "./config/db";
import { environmentVariables } from "./env/environment";
import router from "./Router/router";

const app: Application = express();

app.use(express.json());

DbConnect();

app.use("/api", router);

app.listen(environmentVariables.Port, () => {
  console.log(`Server is running`);
});

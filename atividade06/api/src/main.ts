import "dotenv/config";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { StudentRoute } from "./routes";
import { MongoDatabase } from "./shared/database/mongo.database";
import HttpExceptionMiddleware from "./shared/middlewares/httpexception.middleware";

async function bootstrap() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: "*" }));

  app.use(StudentRoute);

  // app.use(HttpExceptionMiddleware);

  // app.use((err, req, res, next) => {
  //   res.sendStatus(400);
  //   res.json({ error: true });
  // });

  await MongoDatabase.connect();

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log("Oka!");
  });
}

bootstrap();

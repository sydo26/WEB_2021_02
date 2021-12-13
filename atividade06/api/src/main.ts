import "dotenv/config";
import express from "express";
import cors from "cors";
import { StudentRoute } from "./routes";
import { MongoDatabase } from "./shared/database/mongo.database";

async function bootstrap() {
  const app = express();
  app.use(express.json());
  app.use(cors({ origin: "*" }));
  app.use(StudentRoute);

  await MongoDatabase.connect();

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log("Oka!");
  });
}

bootstrap();

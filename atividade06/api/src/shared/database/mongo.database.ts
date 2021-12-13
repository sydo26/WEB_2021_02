import mongoose from "mongoose";

class MongoDatabaseClass {
  async connect() {
    try {
      return await mongoose.connect(process.env.MONGO_DATABASE_CONNECT_URL);
    } catch (error) {
      console.error(error);
      process.exit(0);
    }
  }
}

export const MongoDatabase = new MongoDatabaseClass();

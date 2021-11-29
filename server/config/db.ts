import mongoose, { ConnectOptions } from "mongoose";

const ConnectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  } catch (error) {
    console.log("Conntection Failed ", (error as Error).message);
  }

  const connection = mongoose.connection;

  if (connection.readyState >= 1) {
    console.log("Connected to database");
    return;
  }

  connection.on("error", () => console.log("conntection failed."));
};

export default ConnectDB;

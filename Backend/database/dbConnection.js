import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "MERN_STACK_JOB_SEEKING",
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log(`Error not connected to the database: ${err}`);
    });
};

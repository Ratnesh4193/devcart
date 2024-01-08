import mongoose from "mongoose";
// import dotenv
const connectDB = async () => {
  const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_LOCAL_PORT,
    MONGODB_DATABASE,
  } = process.env;

  // const url = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}?authSource=admin`;
  const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(
      `MongoDB Successfully Connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`DB-Error:${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;

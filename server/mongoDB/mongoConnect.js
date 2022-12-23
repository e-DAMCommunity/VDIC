import mongoose from "mongoose";
const mongodbConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://edamcommunity:74X0DMaRkDj3uawr@cluster0.8jlftjy.mongodb.net/?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error while Connecting MongoDB");
  }
};
export default mongodbConnection;

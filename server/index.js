import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
const app = express();
const port = 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
console.log("edam");
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

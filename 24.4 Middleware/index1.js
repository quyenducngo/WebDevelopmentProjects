import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
//using this doesn't mean i have to give the exact path, this does it for me
///Users/quyen/Desktop/quyen/WebDevelopmentProjects/24.4 Middlewarepublic/index.html

const app = express();
// const bodyParser = bodyParser();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  // console.log(__dirname + "public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req,res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

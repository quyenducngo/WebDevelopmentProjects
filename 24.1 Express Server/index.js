import express from "express";
const app = express();
const port = 3000;
app.get("/about", (req, res) => {
  // console.log(req.rawHeaders);USE THIS TO SEE THE GET REQUEST
  //the "/" there is because the URL http://localhost:3000/about << starts with a /
  res.send("Hello, About World");
});
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
  //the "/" there is because the URL http://localhost:3000/ << starts with a /
});
app.get("/contact", (req, res) => {
  res.send("Hello, Contact Us");
});
app.get("/home", (req, res) => {
  res.send("<h1>Home Home</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/jimmy", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/jimmy", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/jimmy", (req, res) => {
  //Deleting
  res.sendStatus(200);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
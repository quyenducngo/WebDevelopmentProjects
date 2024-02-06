const fs = require("fs");

// fs.writeFile(file,data[,options],callback)


//how to write
// fs.writeFile("message.txt", "Hello from NodeJS", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved");
// });


//how to read files
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/tasks");

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET requests are diabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Service Not Available sorry");
// });

//This line parses incoming req data from JSON to Objects

app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

// const multer = require("multer");
// const upload = multer({
//   dest: "avatars",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error("Please upload a word doc"));
//     }
//     cb(undefined, true);
//     // cb(undefined, true);
//     // cb(new Error("File must be a PDF"));
//     // cb(undefined, false);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

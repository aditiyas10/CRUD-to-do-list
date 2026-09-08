require("dotenv").config();
const Task = require("./config/db");

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const taskRoutes = require("./routes/task-route");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

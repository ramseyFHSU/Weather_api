require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const weather = require("./weather");
const userRouter = require("./routes/users");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/weather", weather);

app.use("/users", userRouter);

app.listen(port, () => console.log(`App listening on port${port}`));

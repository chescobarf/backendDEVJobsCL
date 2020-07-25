const express = require("express");
const router = require("./routes");
const apiRouter = require("./routes");

const app = express();

app.use(express.json());
app.use("/api/test", apiRouter);

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server corriendo en : ${process.env.PORT || "3000"}`);
});

const express = require("express");
const apiRouter = require("./routes");

const app = express();

app.use(express.json());
app.use("/api", apiRouter);

app.listen(process.env.PORT || "3000", () => {
  console.log(`Server corriendo en : ${process.env.PORT || "3000"}`);
});

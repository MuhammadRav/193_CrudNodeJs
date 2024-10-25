// app.js
const express = require("express");
const app = express();
const objekRoute = require("./routes/objekRoute");

app.use(express.json());

app.use("/api", objekRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});

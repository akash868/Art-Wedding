require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const db = require("./config/dbConfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

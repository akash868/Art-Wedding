require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const db = require("./config/dbConfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", routes);

// Add a root route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

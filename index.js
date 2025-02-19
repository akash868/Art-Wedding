require("dotenv").config();
const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http"); // Required for AWS Lambda
const routes = require("./routes/routes");

const app = express();

// ✅ Enable CORS
app.use(cors());
app.use(express.json());

// ✅ Define routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ✅ Conditional `app.listen()` for local testing
if (process.env.LOCAL_DEV === "true") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

// ✅ Export as AWS Lambda handler
module.exports.handler = serverless(app);

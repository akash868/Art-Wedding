require("dotenv").config();
const express = require("express");
const cors = require("cors");  // Import CORS
const routes = require("./routes/routes");
const db = require("./config/dbConfig");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS for all requests
app.use(cors());

// ✅ Enable CORS with custom settings (optional)
app.use(cors({
    origin: "*",  // Allow all origins (Change this to specific frontend URL for security)
    methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"],  // Allowed headers
    credentials: true  // Allow cookies (if needed)
}));

// ✅ Handle Preflight Requests for PUT/DELETE
app.options("*", cors()); 

app.use(express.json());
app.use("/api", routes);

// ✅ Add a root route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// ✅ Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

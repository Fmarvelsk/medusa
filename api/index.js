
const express = require("express");
const cors = require("cors");
const { userRoles } = require("./model");

const app = express();

app.use(cors()); 
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "Welcome to medusa api" });
});

app.get("/api/roles", (req, res) => {
  res.json(userRoles);
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

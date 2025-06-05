const express = require("express");
const cors = require("cors");
const residentRoute = require("./routes/resident.route");
const connectDB = require("./utils/mongo");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/residents", residentRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

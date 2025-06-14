const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const registerRouter = require("./routes/register");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/register", registerRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

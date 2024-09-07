require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const connectDB = require("./connectMongo");

connectDB();
const Router = require("./routers")

app.use("/api", Router)
app.get('/', (req, res) => {
    res.status(200).json({ name: "Ramu gupta " })
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

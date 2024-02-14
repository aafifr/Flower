const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = "3000";
app.use(cors());

app.use("/shared", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/index.html"));
});
app.get("/flower", (req, res) => {
    res.sendFile(path.join(__dirname, "pages/flower.html"));
});

app.listen(port, () => console.log("Server Runing in Port :3000"));

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Success!\nThis node project has been dockerized!");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
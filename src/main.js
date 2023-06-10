import express from "express";

const app = express();

function main(req, res) {
    res.send("Hello Bhai");
}

app.get("/main",main);
app.listen(4000);
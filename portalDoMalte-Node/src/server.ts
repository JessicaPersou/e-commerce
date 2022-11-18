import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.json({
      message: "Bem vindo ao Portal do Malte"
    })
})

app.listen(4000, () => console.log("Server is running -> localhost:4000"));

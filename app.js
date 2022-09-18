const express = require('express');
const app = express();

app.get("/home", function(req,res){
    res.send("Estamos na página Home.")
})

app.listen(3000, () => console.log("Servidor executado com sucesso!"));
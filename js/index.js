// const express = require('express');
// const app = express();

// app.get("/home", function(req,res){
//     res.send("Estamos na página Home.")
// })

// app.listen(3000, () => console.log("Servidor executado com sucesso!"));

let cont = 0;

const backgroundImages = [
  'url("images/josh-olalde-RdePFz33RIA-unsplash.png")',
  'url("images/alexander-cifuentes-46vZtdZhWAs-unsplash.png")'
]


setInterval(()=>{
    const banner = document.querySelector(".banner");

    banner.style.background = backgroundImages[cont];
    banner.style.backgroundPosition = "center";
    banner.style.backgroundRepeat = "no-repeat";
    banner.style.backgroundSize = "cover";

    if (cont == 3) {
        cont = 0;
      } else cont++;
}, 5000);

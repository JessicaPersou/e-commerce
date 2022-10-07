/*----------------------MUDAR FOTO NO CARROSSEL----------------------*/

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

/*----------------------MUDAR FOTO NO CARROSSEL----------------------*/
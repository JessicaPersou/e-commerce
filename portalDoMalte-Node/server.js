const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(
      JSON.stringify({ messege: "Seja bem vinda(o), ao Portal do Malte." })
    );
  })
  .listen(3000, () => console.log("Servidor: 3000"));

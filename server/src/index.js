const http = require("http");
const port = 3001;

const characters = require("./utils/data");

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // localhost:3001/rickandmorty/character/4 
  if(req.url.includes("rickandmorty/character")){
    const id = req.url.split("/").pop();
    const character = characters.filter(charac =>  charac.id === Number(id));
    res
    .writeHead(200, {"conten-type": "aplication-json"})
    .end(JSON.stringify(character[0]));
  }
}).listen(port, "localhost");
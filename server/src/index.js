const http = require("http");
const port = 3001;

const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //localhost:3001/onsearch/4 

  const id = req.url.split("/").pop();

  if(req.url.includes("onsearch")){
    getCharById(res, id);
  }

  if(req.url.includes("detail")){
    getCharDetail(res, id);
  }

}).listen(port, "localhost");
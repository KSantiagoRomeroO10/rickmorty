const express = require("express");
const server = express();
const morgan  = require ("morgan");
const port = 3001;
const router = require("../src/routes/index");
const cors = require("cors");

server.use(express.json()); 
server.use(cors());
server.use(morgan("dev"));
server.use("/rickandmorty", router);

server.listen(port, ()=>{
  console.log("Server raised in port " + port)
})

// const http = require("http");
// const port = 3001;

// const getCharById = require("./controllers/getCharById")
// const getCharDetail = require("./controllers/getCharDetail")

// http.createServer((req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   localhost:3001/onsearch/4 

//   const id = req.url.split("/").pop();

//   if(req.url.includes("onsearch")){
//     getCharById(res, id);
//   }

//   if(req.url.includes("detail")){
//     getCharDetail(res, id);
//   }

// }).listen(port, "localhost");
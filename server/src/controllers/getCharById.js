const axios = require("axios");
const url = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) =>{
  // localhost::3001/rickandmorty/onsearch/1
  const { id } = req.params;
  axios(url+id).then((response) => {
    const character = {
      id: response.data.id,
      name: response.data.name,
      status: response.data.status,
      species: response.data.species,
      gender: response.data.gender,
      origin: response.data.origin,
      image: response.data.image
    }
    res.status(200).json(character)
  }, (error) => { res.status(500).json(error.message) }
  )

}

module.exports = { getCharById };


// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//   .then(response => response.data)
//   .then(data => {
//     const character = {
//       id: data.id,
//       name: data.name,
//       status: data.status,
//       species: data.species,
//       gender: data.gender,
//       origin: data.origin,
//       image: data.image,
//     }
//     res
//       .writeHead(200, {"Content-Type": "application/json"})
//       .end(JSON.stringify(character));
//   })
//   .catch((error)=> res.writeHead(500, {"Content-Type": "text/plain"}).end(`Personaje con  id ${id} no encontrado`))
// }

// module.exports = getCharById;
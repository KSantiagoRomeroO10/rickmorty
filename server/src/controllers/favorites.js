let favorites = require("../utils/favorites");

//localhost:3001/POST/rickandmorty/favorites
const postFav = (req, res) => {
  if(!(favorites.id == req.body.id)){
    favorites.push(req.body);
    res.status(201).json(favorites);
  }
  else{
    res.status(409).json(favorites);
  }
    // favorites.push(req.body);
    // res.status(201).json(favorites);
}
//localhost:3001/GET/rickandmorty/favorites
const getFav = (req, res) => {
  res.status(200).json(favorites);
}
//localhost:3001/DELETE/rickandmorty/favorites/:id
const deleteFav = (req, res) => {
  const {id} = req.params;
  favorites = favorites.filter(character => character.id != Number(id));
  res.status(200).json(favorites);
}

module.exports = { postFav, getFav, deleteFav }
import { ADD_FAV, REMOVE_FAV } from './Action-Types'
import axios from "axios";

export const addFav = (character) => {
  return function(dispatch){
    axios.post("http://localhost:3001/rickandmorty/favorites", character)
    .then(response => {
      return dispatch({
        type: ADD_FAV, 
        payload: response.data
      })
    })
  }
}

export const removeFav = (id) => {
  return function(dispatch){
    axios.delete(`http://localhost:3001/rickandmorty/favorites/${id}`)
    .then(response => {
      return dispatch({
        type: REMOVE_FAV, 
        payload: response.data
      })
    })
  }
}
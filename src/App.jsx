import './App.css';

import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cards from './components/Cards';
import Nav from './components/Nav';
import About from './components/About'
import Detail from './components/Detail';
import Error404 from './components/Error404';

function App() {

  let [character, setCharacter] = useState([]);

  const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
  const API_KEY = '31f8e5b3ca42.d738d62161ed3b84a99b';

  const onSearch = (id) => {

    if (id === '') {
      window.alert('¡Entrada vacia, Ingrese un ID de personaje!');
      return;
    }

    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
        const existingCharacter = character.find(char => char.id === data.id);
        if (existingCharacter) {
          window.alert('¡Este personaje ya existe en la lista!');
        }
        else if(data) {
          setCharacter((character) => [...character, data]);
        }
        else {
          window.alert('¡Problemas de conexión con la api!');
        }
      })
      .catch(() => {
        window.alert('¡No hay personajes con este ID!');
      });
  }

  const onClose = (id) => {
    const charactersFiltered = character.filter(character => character.id !== id);
    setCharacter(charactersFiltered);
  }

  return (
    <Routes>
      <Route path='' element={
        <>
          <Nav onSearch={onSearch}/>
          <Cards character={character} onClose={onClose}/>
        </>
      } />
      <Route path='about' element={
        <>
          <Nav onSearch={onSearch}/>
          <About/>
        </>
      } />
      <Route path='detail/:id' element={
        <>
          <Nav onSearch={onSearch}/>
          <Detail/>
        </>
      }/>
      <Route path=':Error404' element={
        <>
          <Nav onSearch={onSearch}/>
          <Error404/>
        </>
      }/>
    </Routes>
  );
}

export default App;

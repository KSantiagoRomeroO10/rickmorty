import './App.css';

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites";
import Error404 from './components/Error404/Error404';

function App() {

  const [character, setCharacter] = useState([]);
  const location = useLocation();

  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const email = 'kevin@hotmail.com';
  const pass = '321dsa';

  const login = (form) => {
    if(form.email === email && form.pass === pass){
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = (logout) => {
    if(access && logout){
      setAccess(false);
      navigate('/');
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

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
    <>

      {
        location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>
      }

      <Routes>

        <Route path='' element={<Form login={login}/>}/>
        <Route path='home' element={<Cards character={character} onClose={onClose}/>} />
        <Route path='about' element={<About/>}/>
        <Route path='detail/:id' element={<Detail/>}/>
        <Route path='favorites' element={<Favorites/>} />
        <Route path=':Error404' element={<Error404/>}/>

      </Routes>

    </>
  );
}

export default App;

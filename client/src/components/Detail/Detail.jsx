import './style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 

const Deatil = () => {

  const [character, setCharacter] = useState({})

  //const URL_BASE = 'https://rickandmortyapi.com/api/character';
  const URL_BASE = 'http://localhost:3001/detail/';

  const {id} = useParams();  //objeto con la información de la ruta.

  useEffect(() => {
    axios(`${URL_BASE}/${id}`)
    .then(response => response.data)
    .then((data) => {
       if (data) {
          setCharacter(data);
       }
       else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
  }, [id]);

  return (
    <>
      <div className='detailImg'>
        <img src={character?.image} alt='Error no hay imagen.'/>
      </div>
      <div className='detailInfo'>
        <div className='detailP'>
          <h2>Name: {character?.name}</h2>
          <h2>Status: {character?.status}</h2>
          <h2>Species: {character?.species}</h2>
          <h2>Gender: {character?.gender}</h2>
          <h2>Origin: {character?.origin?.name}</h2>
        </div>
      </div>
    </>
  )
}

export default Deatil;
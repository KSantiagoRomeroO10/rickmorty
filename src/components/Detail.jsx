import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 

const Deatil = () => {

  const [character, setCharacter] = useState({})

  const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
  const API_KEY = '31f8e5b3ca42.d738d62161ed3b84a99b';

  const {id} = useParams();  //objeto con la información de la ruta.

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
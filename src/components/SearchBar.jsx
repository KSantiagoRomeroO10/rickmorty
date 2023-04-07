import { useState } from "react";

export default function SearchBar({onSearch}) {
   
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value)
   }
   const randomNumber = Math.floor(Math.random()*826)+1; 

   return (
      <div>
         <input type='number' onChange={handleChange} value={id} placeholder="Máximo: 826"/>
         <button onClick={() =>{onSearch(id); setId('')}} className="button-search-bar">Agregar</button>
         <button onClick={() =>{onSearch(randomNumber); setId('')}} className="button-search-bar">Random</button>
      </div>
   );
}

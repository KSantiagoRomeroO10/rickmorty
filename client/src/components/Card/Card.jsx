import './style.css';
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/Action';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) {
  
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFav(id);
    }
    else{
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image});
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
  }, [myFavorites]);
  
  return (
    <div className="card">

      <NavLink to={`/detail/${id}`}>
        <img src={image} alt='Error no hay imagen.'/>
      </NavLink>
      <p className="info info0">Name: {name}</p>
      <p className="info info1">Status: {status}</p>
      <p className="info info2">Species: {species}</p>
      <p className="info info3">Gender: {gender}</p>
      <p className="info info4">Origin: {origin.name}</p>
      <button className="card-button1" onClick={() => onClose(id)}>X</button>
      <button className="card-button2" onClick={handleFavorite}>{ isFav ? '❤️' : '🤍' }</button>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)) },
    removeFav: (id) => { dispatch(removeFav(id)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

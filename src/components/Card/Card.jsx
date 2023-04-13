import './style.css';
import { NavLink } from 'react-router-dom';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
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
      <button className="card-button" onClick={() => onClose(id)}>X</button>
    </div>
  )
}

import './style.css';

import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
      <div className="Error404">
        <h1>Error 404</h1>
        <hr/>
        <p>No se encontró la página correspondiente, porfavor navege por sitios de la página existentes. Coordialmente la administración que no es de HENRY.</p>
        <Link to="/home"><p className='volver'>Volver a la página de inicio</p></Link>
      </div>
    )
}

export default Error404;
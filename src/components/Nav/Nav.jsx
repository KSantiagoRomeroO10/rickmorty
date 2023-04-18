import './style.css';
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch, logout }) => {

  return (
    <>
      <div className="searchBarTranparent"></div>
      <nav className="searchBar">

        <SearchBar onSearch={onSearch} logout={logout}/>
        <NavLink to='/home' className='NavLink1'> Home </NavLink>
        <NavLink to='/about' className='NavLink2'> About </NavLink>
        <NavLink to='/favorites' className='NavLink3'> Favorites </NavLink>

      </nav>
    </>
  )

}

export default Nav;
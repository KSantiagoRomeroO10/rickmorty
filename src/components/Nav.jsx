import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch }) => {

  return (
    <>
      <div className="searchBarTranparent"></div>
      <nav className="searchBar">

        <SearchBar onSearch={onSearch} />
        <NavLink to='/' className='NavLink1'>Home</NavLink>
        <NavLink to='/about' className='NavLink2'>About</NavLink>

      </nav>
    </>
  )

}

export default Nav;
import { NavLink } from 'react-router-dom';
import './Header.scss'
import picHome2 from '../../assets/home2.webp';

/**
 * 
 * @returns 
 */
function Header() {

  //
  return (

    <nav className="headerNavbar">



      <div className="navbar_text">
        <span>DEVELOPPEUR WEB</span>
      </div>



      <div className='navbar__btn'>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')}
          end
        >
          Accueil
        </NavLink>

        <NavLink
          to="/myprojects"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')}
          end
        >
          Mes réalisations
        </NavLink>


        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')}
          end
        >
          Contact
        </NavLink>

      </div>

      <img className="navBarImg" src={picHome2} alt="picHome2" />

    </nav>

  )

}

export default Header
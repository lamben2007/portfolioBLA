import { NavLink } from 'react-router-dom';
import './Header.scss'
import picHome2 from '../../assets/home2.webp';

/**
 * Composant Header
 * 
 * Ce composant affiche l'entête du site avec le menu
 * 
 * @returns {JSX.Element} Entête
 */
function Header() {

  // Rendu
  return (

    <header>

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
            Réalisations
          </NavLink>


          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')}
            end
          >
            Contact
          </NavLink>

        </div>

        <img className="navBarImg" src={picHome2} alt="image de fond entête" />

      </nav>

    </header>
  )

}

export default Header
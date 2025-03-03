import { Button, Image } from "react-bootstrap";
import picHome2 from '../../assets/home2.webp';
import logoLinkedIn from '../../assets/logoLinkedin.webp';
import { NavLink } from 'react-router-dom';
import './Footer.scss'


function Footer() {
  return (
    <div className="divFooter">

      <div className='divFooter1'>

        <Image className='circlePicture' src={picHome2} alt="Profile" roundedCircle />

        <div className='navbar__btn'>

          <NavLink to="/" className={({ isActive }) => (isActive ? 'navbar__link navbar__link--underline' : 'navbar__link')} end>
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

        <div className='socialNetwork'>

          <span>Réseaux sociaux</span>

          <img src={logoLinkedIn} alt="logoLinkedIn" />

          <Button variant="primary">Contactez-moi</Button>

        </div>

      </div>

      <div className='divFooter2'>
        <span className="divFooter__copyright">© 2025 Portfolio. All rights reserved</span>
      </div>

    </div>
  )
}

export default Footer
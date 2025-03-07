import { Button, Image } from "react-bootstrap";
import picHome2 from '../../assets/home2.webp';
import logoLinkedIn from '../../assets/logoLinkedin.webp';
import { NavLink, useNavigate } from 'react-router-dom';
import myCV from '../../assets/eCV.pdf';
import './Footer.scss'


function Footer() {

  //
  const navigate = useNavigate();

  //
  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/benoit-lamour/", "_blank", "noopener,noreferrer");
  };

  //
  const handleClickContact = () => {
    navigate("/contact");
  };

  //
  const handleClickOpenPDF = () => {
    window.open(myCV, "_blank");
  };

  //
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

          <button className="buttonLinkedIn" onClick={handleClickLinkedIn}>
            <img src={logoLinkedIn} alt="buttonLinkedIn" />
          </button>

          <Button variant="primary" onClick={handleClickContact}>Contactez-moi</Button>
          
          <Button variant="primary" onClick={handleClickOpenPDF}>Mon CV</Button>

        </div>

      </div>

      <div className='divFooter2'>
        <span className="divFooter__copyright">© 2025 Portfolio. All rights reserved</span>
      </div>

    </div>
  )
}

export default Footer
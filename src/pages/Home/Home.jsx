// import { useEffect, useState } from 'react';
import './Home.scss';
import picHome2 from '../../assets/home2.webp';
import logoCSS from '../../assets/css.svg';
import logoHTML from '../../assets/html.svg';
import logoJS from '../../assets/javascript.svg';
import { ProgressBar } from "react-bootstrap";


//
function Home() {

  //
  const competencesObj = [
    { "urlLogo": logoCSS, "title": "CSS", "pourcentage": 80 },
    { "urlLogo": logoHTML, "title": "HTML", "pourcentage": 70 },
    { "urlLogo": logoJS, "title": "JS", "pourcentage": 85 },
  ]



  //
  return (
    <div className="divHome">

      <div className='section1'>
        <img className="imgHome" src={picHome2} alt="picHome2" />
        <div className="text-overlay">Bonjour, Je suis Benoît Développeur FRONT-END</div>
        <div className="text2-overlay">Texte2</div>
      </div>



      <div className='section2'>
        <h1>Présentation</h1>
        <p> Présenter au moins 2 projets sur lesquels vous avez travaillé, durant votre formation ou ailleurs. Pour chaque projet, il faudra afficher :
          une courte description de votre réalisation ;</p>
        <p>
          les problématiques que vous avez rencontrées et comment vous les avez surmontées ;
          les compétences qu’il vous a permis de développer ;
          un lien vers le code ou le site (sur GitHub, par exemple).
        </p>
      </div>


      <div className='competences'>

        <h1>Compétences</h1>

        <div className='logoCards'>


          {competencesObj.map((competence, index) => (
            <div className='logoCard' key={index}>
              <img className='logoCompetences' src={competence.urlLogo} alt="logoCompetence" />
              <div className='logoTitle'>{competence.title}</div>
              <ProgressBar now={competence.pourcentage} label={`${competence.pourcentage}%`} />
            </div>
          ))}

          {/* 
          <div className='logoCard'>
            <img className='logoCompetences' src={logoCSS} alt="logoCompetences" />
            <div>CSS</div>
            <ProgressBar now={progress} label={`${progress}%`} />
          </div>

          <div className='logoCard'>
            <img className='logoCompetences' src={logoCSS} alt="logoCompetences" />
            <div>CSS</div>
            <ProgressBar now={progress} label={`${progress}%`} />
          </div> */}


        </div>

      </div>


    </div>
  )
}

export default Home
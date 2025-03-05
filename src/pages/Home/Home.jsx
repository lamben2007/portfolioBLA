import { useEffect } from 'react';
import { ProgressBar, Badge } from "react-bootstrap";
import picHome2 from '../../assets/home2.webp';
import picHome from '../../assets/home.webp';
import logoCSS from '../../assets/css.svg';
import logoHTML from '../../assets/html.svg';
import logoJS from '../../assets/javascript.svg';
import logoREACT from '../../assets/react.svg';
import logoRedux from '../../assets/redux.svg';
import logoSass from '../../assets/sass.svg';
import logoTypeScript from '../../assets/typescript.svg';
import logoNodeJS from '../../assets/node.svg';
import logoNestJS from '../../assets/nestJS.svg';
import logoMongoDB from '../../assets/mongodb.svg';
import './Home.scss';

//
function Home() {

  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //
  const competencesObj = [
    { "urlLogo": logoCSS, "title": "CSS", "pourcentage": 80 },
    { "urlLogo": logoHTML, "title": "HTML", "pourcentage": 70 },
    { "urlLogo": logoJS, "title": "JS", "pourcentage": 85 },
    { "urlLogo": logoREACT, "title": "REACT", "pourcentage": 85 },
    { "urlLogo": logoRedux, "title": "REDUX (toolkit)", "pourcentage": 50 },
    { "urlLogo": logoSass, "title": "SASS", "pourcentage": 65 },
    { "urlLogo": logoTypeScript, "title": "TYPESCRIPT", "pourcentage": 20 },
    { "urlLogo": logoNodeJS, "title": "NODEJS", "pourcentage": 60 },
    { "urlLogo": logoNestJS, "title": "NESTJS", "pourcentage": 10 },
    { "urlLogo": logoMongoDB, "title": "MONGODB", "pourcentage": 50 }
  ]

  //
  return (
    <div className="divHome">

      <section className='section1'>
        <img className="imgHome" src={picHome2} alt="picHome2" />
        <div className="text-overlay">Bonjour, Je suis Benoît Développeur FRONT-END</div>
        {/* <div className="text2-overlay">Texte2</div> */}
      </section>

      <section className='section2'>

        <h2><strong>Passionné par l’Informatique et le Développement </strong></h2>

        <p>
          Depuis toujours, le développement informatique est une véritable passion pour moi. Mon parcours a commencé très jeune, avec la programmation en Basic sur un ordinateur familial MSX,
          où je créais mes premiers petits jeux. Cette curiosité m&apos;a naturellement conduit à explorer différentes technologies telles que Turbo Pascal,
          C et Visual Basic 6.
        </p>

        <p>
          Après un <strong>BTS Électrotechnique</strong>, j’ai souhaité allier mes compétences techniques et mon intérêt pour le développement, ce qui m’a amené à travailler
          dans le domaine de l’<strong>informatique industrielle</strong>. Pendant une dizaine d’années, j’ai développé des solutions en <strong>SQL Server, VB6, VB.NET et ASP.NET</strong>.
        </p>

        <p>
          Par la suite, j’ai occupé divers postes en <strong>support IT, achats et services généraux</strong>. Toutefois, le développement est resté une constante dans
          mon parcours : en parallèle de mon activité professionnelle, j’ai continué à coder en <strong>autodidacte</strong>, travaillant sur plusieurs projets personnels.
        </p>

        <p>
          En <strong>2023</strong>, j’ai décidé de revenir à mon premier domaine de prédilection : le développement web. D’abord orienté vers le <strong>front-end</strong>, mon objectif est d’évoluer également vers le <strong>back-end</strong> afin de devenir un développeur full-stack.
        </p>

        <p>
          En <strong>2024</strong>, j’ai concrétisé cette transition professionnelle en intégrant une formation intensive de <strong>6 mois chez OpenClassrooms</strong> pour actualiser
          et approfondir mes compétences en développement web.
        </p>

        <p>
          Toujours en veille technologique, curieux et déterminé, je suis prêt à relever de nouveaux défis et à contribuer à des projets innovants.
        </p>

      </section>

      <section>
        <img className="imgHome2" src={picHome} alt="imgHome2" />
      </section>

      <section className='competences'>

        <h2>COMPETENCES</h2>

        <div className='logoCards'>

          {competencesObj.map((competence, index) => (
            <div className='logoCard' key={index}>
              <img className='logoCompetences' src={competence.urlLogo} alt="logoCompetence" />
              <div className='logoTitle'>{competence.title}</div>
              <ProgressBar now={competence.pourcentage} label={`${competence.pourcentage}%`} />
            </div>
          ))}

        </div>

      </section>

      <section className='training'>

        <h2>FORMATIONS</h2>

        <div className="trainingCards">

          <div className='trainingCard'>
            <span className="trainingTitle">DEVELOPPEUR Web</span>
            <Badge bg="primary" className='trainingDate'>📅 09/2024 - 03/2025</Badge>
            <span className='trainingSchool'> 🏫 OpenClassrooms (Paris à distance)</span>
            <span className='trainingLocation'>📍Paris à distance</span>
            <span className="trainingLevel">🎓Niveau 5 (Bac+2)</span>
          </div>

          <div className='trainingCard'>
            <span className="trainingTitle">Génie Electrique et Informatique Industrielle</span>
            <Badge bg="primary" className='trainingDate'>📅 09/1997 - 03/1998</Badge>
            <span className='trainingSchool'> 🏫 Institut Universitaire Professionalisé</span>
            <span className='trainingLocation'>📍Valenciennes</span>
            <span className="trainingLevel">🎓(Bac+4)</span>
          </div>

        </div>





      </section>

    </div>
  )
}

export default Home
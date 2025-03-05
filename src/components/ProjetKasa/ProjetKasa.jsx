import { Button } from "react-bootstrap";
import './ProjetKasa.scss';


//
function ProjetKasa() {

    //
    const handleClickGitHub = () => {
        window.open("https://github.com/lamben2007/Projet5_kasa", "_blank", "noopener,noreferrer");
    };

    //
    const handleClickSite = () => {
        window.open("https://lamben2007.github.io/portfolioBLA/", "_blank", "noopener,noreferrer");
    };

    //
    return (

        <div className='projectCard'>

            <div>
                <h2>Application de location immobilière</h2>
                <div>Développement de l&apos;interface utilisateur d&apos;une application immobilière avec React.</div>
            </div>


            <div>
                <h3>Objectif du projet</h3>
                <div>
                    Créer l&apos;interface utilisateur de l&apos;application de location immobilière en React.
                    Objectif client : Développer une application de type &quot;single-page&quot; conforme à une maquette fournie.
                    Implémenter l&apos;ensemble des pages avec des fonctionnalités interactives.
                    Simuler les requêtes API via des fichiers JSON en attendant l&apos;intégration du backend.

                </div>
            </div>

            <div>
                <h3>Réalisations effectuées</h3>
                <div>
                    <ul>
                        <li>Développement d&apos;une application REACT</li>
                        <li>Création de composants réutilisables : Header, Footer, Host, Banner, Card, Collapse, Logo, Rating.</li>
                        <li>Configuration du routeur pour une navigation fluide entre les pages (accueil, à propos, détail des logements, et page 404).</li>
                        <li>Utilisation de useState et useEffect pour récupérer et gérer les données des logements, d&apos;un logement spécifique et des éléments repliables.</li>
                        <li>Ajout d&apos;animations pour les éléments repliables et le carrousel.</li>
                    </ul>
                </div>
            </div>


            <div>
                <h3>Technologies utilisées</h3>
                <div>
                    <ul>
                        <li>HTML</li>
                        <li>SCSS</li>
                        <li>Javascript</li>
                        <li>REACT</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3>Aperçus des interfaces</h3>
                <div>Liste des aperçus</div>
            </div>

            <div className="projectButtons">
                <Button variant="primary" className="projectButton" onClick={handleClickGitHub}>GitHub</Button>
                <Button variant="primary" className="projectButton" onClick={handleClickSite}>Site</Button>
            </div>

        </div>

    )
}

export default ProjetKasa
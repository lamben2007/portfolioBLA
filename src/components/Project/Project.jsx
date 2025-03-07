import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import './Project.scss';


//
function Project() {


    //
    const [projects, setProjects] = useState([]);

    //
    useEffect(() => {
        //
        const fetchData = async () => {
            try {
                const response = await fetch("/data/projects.json");
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                const data = await response.json();
                console.log("descriptionProject", data[0].previews);
                //
                setProjects(data);

            } catch (error) {
                //
                console.error(error);
            }
        };
        //
        fetchData();
    }, []);




    // //
    // const handleClickGitHub = () => {
    //     window.open("https://github.com/lamben2007/Projet5_kasa", "_blank", "noopener,noreferrer");
    // };

    // //
    // const handleClickSite = () => {
    //     window.open("https://lamben2007.github.io/portfolioBLA/", "_blank", "noopener,noreferrer");
    // };

    //
    return (

        <div className='projectCard'>

            {projects && projects.length > 0 ? (
                <>

                    <div>
                        <h2><ReactMarkdown>{projects[0].name}</ReactMarkdown></h2>
                        <ReactMarkdown>{projects[0].description}</ReactMarkdown>
                    </div>


                    <div>
                        <h3>Objectif du projet</h3>
                        <ReactMarkdown>{projects[0].objectif.join("\n")}</ReactMarkdown>
                    </div>


                    <div>
                        <h3>Réalisations effectuées</h3>
                        <ReactMarkdown>{projects[0].completedProjects.join("\n")}</ReactMarkdown>
                    </div>


                    <div>
                        <h3>Technologies utilisées</h3>
                        <div className="projectTechnoList">
                            {
                                projects[0].technologiesUsed.map((techno, index) => {
                                    return <div key={index}>
                                        <span className="projectTechno">{techno}</span>
                                    </div>
                                })
                            }
                        </div>


                    </div>

                    <div>
                        <h3>Aperçus des interfaces</h3>
                        <div className="projectPreviewsList">
                            {
                                projects[0].previews.map((image, index) => {
                                    return <div key={index}>
                                        <img className="projectPreview" src={image} alt="image" />
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    <div className="projectButtons">
                        <Button variant="primary" className="projectButton" >GitHub</Button>
                        <Button variant="primary" className="projectButton" >Site</Button>
                    </div>

                </>





            ) : null}









            {/* <div>
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
            </div> */}

        </div>

    )
}

export default Project
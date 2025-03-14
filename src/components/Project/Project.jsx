// import {  useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import './Project.scss';
import PropTypes from 'prop-types';


/**
 * Composant Project
 * 
 * Ce composant affiche la card contenant une réalisation de projet
 * 
 * @returns {JSX.Element} Composant card avec une réalisation de projet
 */
function Project({ projectData }) {

    // Permet d'ouvrir un lien selon URL spécifiée
    const handleClickLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };


    // Rendu
    return (

        <article className='projectCard'>

            {projectData ? (
                <>

                    <h2><ReactMarkdown components={{ p: ({ children }) => <>{children}</> }}>{projectData.name}</ReactMarkdown></h2>

                    <ReactMarkdown>{projectData.description}</ReactMarkdown>

                    <div>
                        <h3>Objectif du projet</h3>
                        <ReactMarkdown>{projectData.objectif.join("\n")}</ReactMarkdown>
                    </div>

                    <div>
                        <h3>Réalisations effectuées</h3>
                        <ReactMarkdown>{projectData.completedProjects.join("\n")}</ReactMarkdown>
                    </div>

                    <div>
                        <h3>Technologies utilisées</h3>
                        <div className="projectTechnoList">
                            {
                                projectData.technologiesUsed.map((techno, index) => {
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

                            <Carousel>
                                {projectData.previews.map((image, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="projectPreview"
                                            src={`${import.meta.env.BASE_URL}${image}`}
                                            alt={`Slide ${index}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    <div className="projectButtons">

                        {projectData.links.github && projectData.links.github !== "" &&
                            <Button variant="primary" className="projectButton" onClick={() => handleClickLink(projectData.links.github)}>GitHub</Button>
                        }

                        {projectData.links.site && projectData.links.site !== "" &&
                            <Button variant="primary" className="projectButton" onClick={() => handleClickLink(projectData.links.site)}>Site</Button>
                        }

                    </div>

                </>

            ) : null}

        </article>

    )
}

// Définition de la structure de la variable "projectData"
Project.propTypes = {
    projectData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        objectif: PropTypes.arrayOf(PropTypes.string).isRequired,
        completedProjects: PropTypes.arrayOf(PropTypes.string).isRequired,
        technologiesUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
        previews: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.shape({
            github: PropTypes.string.isRequired,
            site: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};


export default Project
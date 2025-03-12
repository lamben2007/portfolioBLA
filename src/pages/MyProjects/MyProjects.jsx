import { useEffect, useState } from "react";
import Project from '../../components/Project/Project';
import './MyProjects.scss';


/**
 * Composant MyProjects
 * 
 * Ce composant affiche une liste de projets en récupérant les données 
 * depuis un fichier JSON externe. 
 * 
 * @returns {JSX.Element} Un conteneur affichant une liste de réalisations.
 */
function MyProjects() {
    // Déclaration d'un état local pour stocker les projets
    const [projects, setProjects] = useState([]);

    // Utilisation de useEffect pour exécuter du code au montage du composant
    useEffect(() => {
        // Scroll la page vers le haut au chargement du composant
        window.scrollTo(0, 0);

        // Fonction asynchrone pour récupérer les données des projets
        const fetchData = async () => {
            try {
                // Récupération des données depuis un fichier JSON externe
                const response = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
                
                // Vérification de la validité de la réponse
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                
                // Conversion des données en JSON
                const data = await response.json();
                
                // Mise à jour de l'état avec les projets récupérés
                setProjects(data);

            } catch (error) {
                // Gestion des erreurs en cas d'échec de la requête
                console.error(error);
            }
        };
        
        // Appel de la fonction pour charger les données
        fetchData();

    }, []); // Le tableau vide signifie que cet effet s'exécute uniquement au montage


    // Rendu
    return (
        <div className='divMyProjects'>

            {/* Titre de la section */}
            <h1 className='title'>MES RÉALISATIONS</h1>

            {/* Affichage des cartes de projets */}
            <div className='projectCards'>
                {projects?.length > 0 &&
                    projects.map((project, index) => (
                        // Affichage de chaque projet en utilisant le composant Project
                        <Project key={index} projectData={project} />
                    ))
                }
            </div>
            
        </div>
    );
}

export default MyProjects;

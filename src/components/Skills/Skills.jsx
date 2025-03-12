import { useEffect, useState } from "react";
import './Skills.scss';

/**
 * Composant Skills
 * 
 * Ce composant récupère dynamiquement une liste de compétences depuis un fichier JSON
 * et les affiche sous forme de cartes avec une image et un titre.
 * 
 * @returns {JSX.Element} Un conteneur contenant les cartes de compétences.
 */
function Skills() {

    // Déclaration de l'état local pour stocker les compétences
    const [skills, setSkills] = useState([]);

    // useEffect pour récupérer les données une seule fois au montage du composant
    useEffect(() => {

        // Fonction asynchrone pour récupérer les données depuis le fichier JSON.
        const fetchData = async () => {
            try {
                // Requête pour récupérer le fichier JSON contenant les compétences
                const response = await fetch(`${import.meta.env.BASE_URL}data/skills.json`);

                // Vérification si la requête a échoué
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }

                // Conversion de la réponse en format JSON
                const data = await response.json();

                // Mise à jour de l'état avec les données récupérées
                setSkills(data);

            } catch (error) {

                // Gestion des erreurs en affichant un message dans la console
                console.error("Erreur de chargement des compétences:", error);
            }
        };

        // Appel de la fonction fetchData
        fetchData();

    }, []);


    // Rendu
    return (
        <div className='skillsCards'>

            {/* Boucle sur les compétences pour les afficher sous forme de cartes */}
            {skills.map((skill, index) => (
                <div className='skillsCard' key={index}>

                    {/* Affichage du logo de la compétence */}
                    <div className='skillsLogo'>
                        <img src={`${import.meta.env.BASE_URL}${skill.urlLogo}`} alt={`skillsLogo${index}`} />
                    </div>

                    {/* Affichage du titre de la compétence */}
                    <div className='skillsTitle'>{skill.title}</div>
                    
                </div>
            ))}

        </div>
    );
}

export default Skills;

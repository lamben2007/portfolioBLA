import './ProjetAPI.scss';


//
function ProjetAPI() {

    //
    return (

        <div className='projectCard'>

            <div>
                <h2>Application de notation de livres</h2>
                <div>Développement et mise en place du backend de l&apos;application avec une attention particulière à la sécurité des données.</div>
            </div>


            <div>
                <h3>Objectif du projet</h3>
                <div>
                    Concevoir les API permettant d&apos;interagir avec la base de données pour effectuer des opérations CRUD
                    (création, modification, suppression, consultation) sur les livres et gérer les notes des utilisateurs,
                    tout en garantissant un haut niveau de sécurité.
                </div>
            </div>

            <div>
                <h3>Réalisations effectuées</h3>
                <div>
                    <ul>
                        <li>Développement des routes API en concevant et implémentant des endpoints pour la gestion des livres, des utilisateurs et des notes.</li>
                        <li>Validation et contrôle des entrées utilisateur afin de prévenir les injections et d’assurer l’intégrité des données stockées en base.</li>
                        <li>Création de middlewares pour la gestion des autorisations, la validation des données, la gestion des erreurs et l’optimisation des images.</li>
                        <li>Sécurisation de l’application par l’intégration de mécanismes d’authentification et de contrôle d’accès afin de garantir la confidentialité et la protection des données.</li>
                    </ul>
                </div>
            </div>


            <div>
                <h3>Technologies utilisées</h3>
                <div>
                    <ul>
                        <li>Javascript</li>
                        <li>Node JS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>

            <div>
                <h3>Aperçus des interfaces</h3>
                <div>Liste des aperçus</div>
            </div>

        </div>

    )
}

export default ProjetAPI
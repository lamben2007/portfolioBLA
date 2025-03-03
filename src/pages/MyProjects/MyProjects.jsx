// import { useEffect, useState } from 'react';
import './MyProjects.scss';


//
function MyProjects() {

    //
    return (
        <div className='divMyProjects'>

            <div className='title'>MES REALISATIONS</div>

            <div className='projectCards'>

                <div className='projectCard'>

                    <div>
                        <h2>Application de notation de livres</h2>
                        <div>Création du backend d&apos;une application de notation de livres</div>
                    </div>


                    <div>
                        <h3>Mission</h3>
                        <div>Description de la mission</div>
                    </div>

                    <div>
                        <h3>Réalisation</h3>
                        <div>Description de la réalisation</div>
                    </div>


                    <div>
                        <h3>Technologies utilisées</h3>
                        <div>Liste des technologies utilisées</div>
                    </div>

                    <div>
                        <h3>Aperçus des interfaces</h3>
                        <div>Liste des aperçus</div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyProjects
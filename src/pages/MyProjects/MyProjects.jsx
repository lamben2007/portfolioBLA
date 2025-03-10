import { useEffect, useState } from "react";
import Project from '../../components/Project/Project';
// import ProjetAPI from '../../components/ProjetAPI/ProjetAPI';
// import ProjetKasa from '../../components/ProjetKasa/ProjetKasa';
import './MyProjects.scss';


//
function MyProjects() {


    //
    const [projects, setProjects] = useState([]);


    //
    useEffect(() => {

        //
        window.scrollTo(0, 0);

        //
        const fetchData = async () => {
            try {
                const response = await fetch("/data/projects.json");
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                const data = await response.json();
                // console.log("data", data[0]);
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


    //
    return (
        <div className='divMyProjects'>
            <h2 className='title'>MES RÉALISATIONS</h2>

            <div className='projectCards'>
                {projects?.length > 0 &&
                    projects.map((project, index) => (
                        <Project key={index} projectData={project} />
                    ))
                }
            </div>
        </div>
    );

}

export default MyProjects
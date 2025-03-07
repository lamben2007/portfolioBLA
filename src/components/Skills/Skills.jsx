import { useEffect, useState } from "react";
import './Skills.scss'

//
function Skills() {

    //
    const [skills, setSkills] = useState([]);

    //
    useEffect(() => {
        //
        const fetchData = async () => {
            try {
                const response = await fetch("/data/skills.json");
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                const data = await response.json();
                //
                setSkills(data);

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
        <div className='skillsCards'>

            {skills.map((skill, index) => (
                <div className='skillsCard' key={index}>
                    <div className='skillsLogo'><img src={skill.urlLogo} alt="skillsLogo" /></div>
                    <div className='skillsTitle'>{skill.title}</div>
                </div>
            ))}

        </div>
    )

}

export default Skills
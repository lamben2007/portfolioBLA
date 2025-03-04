import { useEffect } from 'react';
import ProjetAPI from '../../components/ProjetAPI/ProjetAPI';
import ProjetKasa from '../../components/ProjetKasa/ProjetKasa';
import './MyProjects.scss';


//
function MyProjects() {

    //
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //
    return (
        <div className='divMyProjects'>

            <div className='title'>MES REALISATIONS</div>

            <div className='projectCards'>
                <ProjetAPI />
                <ProjetKasa />
            </div>

        </div>
    )
}

export default MyProjects
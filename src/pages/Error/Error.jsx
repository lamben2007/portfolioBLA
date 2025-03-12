import { Link } from 'react-router'
import './Error.scss';


/**
 * Composant Error
 * 
 * Ce composant affiche une page d'erreur 404 lorsque l'utilisateur tente d'accéder 
 * à une page inexistante. Il affiche un message d'erreur et un lien permettant de retourner 
 * à la page d'accueil.
 * 
 * @returns {JSX.Element} Composant de la page d'erreur 404.
 */
function Error() {

    //
    return (
        <div className="divError">
            {/* Affichage du code d'erreur 404 */}
            <div className="divError_404">404</div>

            {/* Message informant l'utilisateur que la page n'existe pas */}
            <div className="divError_Message">Oups! La page que vous demandez n&apos;existe pas.</div>

            {/* Lien permettant de revenir à la page d'accueil */}
            <Link className="divError_lien" to="/">Retourner sur la page d&apos;accueil</Link>
        </div>
    );
}

export default Error;

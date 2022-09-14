import React from "react";
import {Link} from "react-router-dom"

function NotFound () {
    return (
            <div>
                <h1>404</h1>
                <Link to='/'>Retourner à la page d'accueil</Link>
            </div>
    )
}
export default NotFound
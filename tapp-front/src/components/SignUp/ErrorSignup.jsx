import React from "react";
import '../SignUp/ValidationSignUp.scss'

function ErrorSignup ({firstName}) {
    function reloadSignup (e) {
        e.preventDefault()
         document.location.reload()
    }
    return (
        <div className="validation-message">
            <p className="thank-you-sigup">Sorry {firstName} !</p>
            <p> 
                Your account could not be created
            </p>
            <button onClick={(e) => reloadSignup(e)}>Retry to Sign-Up</button>
        </div>
    )
}

export default ErrorSignup
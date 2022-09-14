import React from "react";
import '../SignUp/ValidationSignUp.scss'
import { Link } from "react-router-dom";
function ValidateSignUp ({firstName, eMail}) {
    return (
        <div className="validation-message">
            <p className="thank-you-sigup">Thank You {firstName} !</p>
            <p> Please click on the confirmation link that was sent to you at the email address : <span className="email-signup">{eMail}</span></p>
            <Link to="/login">Connect to your profile</Link>
        </div>
    )
}

export default ValidateSignUp
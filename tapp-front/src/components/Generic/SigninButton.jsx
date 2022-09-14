import React from "react";
import { Link } from "react-router-dom";

function SigninButton () {

    return (
        <Link to='/login'><i className="fa fa-user-circle"></i>Sign-in</Link>
    )
}

export default SigninButton
import React from "react";
import LoginForm from "./LoginForm";
import "../Login/SignInContent.scss"
import { Link } from "react-router-dom";

function SignInContent () {
    return (
        <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LoginForm requestType={'POST'} />
                <Link to='/signup'>Create an account </Link>
        </section>
    )
}
export default SignInContent
import React from "react";
import SignUpForm from "./SignUpForm";


function SignUpContent () {
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign Up</h1>
            <SignUpForm />
        </section>
    )
}

export default SignUpContent
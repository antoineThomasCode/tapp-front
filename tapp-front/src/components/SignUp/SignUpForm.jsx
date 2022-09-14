import React from "react";
import { useState } from "react";
import requestHandler from "../../utils/genericFetch";
import "../Generic/GenericForm.scss"
import GenericForm from "../Generic/GenrericForm";
import GenericInput from "../Generic/Input";
import ValidateSignUp from "./ValidateSignup";
import {baseUrl} from "../../utils/APIpaths";

import {emailIsCorrect, nameIsCorrect, passwordIsCorrect} from '../../utils/formValidation'
import ErrorSignup from "./ErrorSignup";

function SignUpForm () {

    const [firsName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [eMail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validateSignUp, setValidateSignUp] = useState(false)
    const [errorSignup, setErrorSignup] = useState(false)

    function handleChangeFirstName (e) {
        const input = document.getElementById('firstname')
        setFirstName(e.target.value)
        if (nameIsCorrect(e.target.value)) {
            input.style.border = 'solid 4px green'
           
        } else {
            input.style.border = 'solid 4px red'
        }
    }
    function handleChangeLastName (e) {
        const input = document.getElementById('lastname')
        setLastName(e.target.value)
        if (nameIsCorrect(e.target.value)) {
            input.style.border = 'solid 4px green'
            
        } else {
            input.style.border = 'solid 4px red'
        }
    }
    function handleChangeEmail (e) {
        const input = document.getElementById('email')
        setEmail(e.target.value)
        if (emailIsCorrect(e.target.value)) {
            input.style.border = 'solid 4px green'
            
        } else {
            input.style.border = 'solid 4px red'
        }
    }
    function handleChangePassword (e) {
        const input = document.getElementById('password')
        setPassword(e.target.value)
        if (passwordIsCorrect(e.target.value)) {
            input.style.border = 'solid 4px green'
            
        } else {
            input.style.border = 'solid 4px red'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (firsName && lastName && eMail && password && nameIsCorrect(firsName) && nameIsCorrect(lastName) && passwordIsCorrect(password) && emailIsCorrect(eMail)) {
            const postApi = async () => {
                const bodyPost = {
                    email : eMail,
                    password : password,
                    firstName : firsName,
                    lastName : lastName
                  }
                const response = await requestHandler({
                    url: `${baseUrl}/user/signup/`,
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(bodyPost)
                });
                
                if (response?.status === 200) {
                    setValidateSignUp(true)
                } else {
                    setErrorSignup(true)
                }
                
            };
            postApi();
           
           
        } 
    }
    if (errorSignup) {
        return <ErrorSignup firstName={firsName}/>
    }
    if (validateSignUp) {
        return <ValidateSignUp eMail={eMail} firstName={firsName} />
    } else {
        return (
            <GenericForm className='connexion-form' submitFunction={handleSubmit}>
                <GenericInput className='input-wrapper' label='Firstname'  htmlFor='firstname' id="firstname" type='text' handleChangeFunction={handleChangeFirstName} />
                <GenericInput className='input-wrapper' label='Lastname'  htmlFor='lastname' id="lastname" type='text' handleChangeFunction={handleChangeLastName} />
                <GenericInput className='input-wrapper' label='E-mail'  htmlFor='email' id="email" type='email' handleChangeFunction={handleChangeEmail} />
                <GenericInput className='input-wrapper' label='password'  htmlFor='password' id="password" type='password' handleChangeFunction={handleChangePassword} />
                <input id="submit-button" type="submit" value="Sign Up" onSubmit={(e) => handleSubmit(e)}></input>
            </GenericForm>
            )
    }
}
export default SignUpForm
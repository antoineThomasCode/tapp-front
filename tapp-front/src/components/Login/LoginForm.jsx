import React from "react";
import {toast} from 'react-toastify'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startSession } from "../../redux/features/loginSlice";
import requestHandler from "../../utils/genericFetch";
import { useNavigate } from "react-router-dom";
import "../Generic/GenericForm.scss"
import GenericForm from "../Generic/GenrericForm";
import GenericInput from "../Generic/Input";
import {baseUrl} from "../../utils/APIpaths";
function LoginForm () {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)
    function handleChangeUsername (e) {
        setUserName(e.target.value)
    }
    function handleChangePassword (e) {
        setPassword(e.target.value)
    }
    
    function handleSubmit (e) {
        e.preventDefault()
        if(!password?.length || !userName?.length) return
        
        const postApi = async () => {
            const bodyPost = {
                username : userName,
                password : password
              }
            const response = await requestHandler({
                url: `${baseUrl}auth/login`,
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(bodyPost),
                errMsg: 'Fail to login ! Please Retry.'
            });
            
            if (response.status === 200) {
                dispatch(startSession(response));
                console.log(response)
                navigate(`/${response.role}`);
            } else {
                setErrorLogin(true)
                toast.error("Personnel non autorisé")
                
            }
        };
        postApi();
   
    }
    
    return (
        <GenericForm className='connexion-form'>
            <GenericInput className='input-wrapper' label='Username'  htmlFor='username' id="username" type='text' handleChangeFunction={handleChangeUsername} />
            <GenericInput className='input-wrapper' label='password'  htmlFor='password' id="password" type='password' handleChangeFunction={handleChangePassword} />
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <input id="submit-button" type="submit" value="Sign In" onClick={handleSubmit}></input>
            {errorLogin ? (<div className="error-message">Fail to login <br /> Please, retry !</div>) : null}
        </GenericForm>
    )
}
export default LoginForm
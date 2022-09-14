import React from "react";
import logo from '../../assets/images/ArgentBank-logo.png'
import { Link } from "react-router-dom";
import "../Generic/Header.scss"
import { useSelector } from "react-redux";
import ProfileName from "./ProfileName";
import LogoutButton from "./LogoutButton";
import SigninButton from "./SigninButton";



function Header () {
    const isLogged = useSelector((state) => state.login.isConnected)
    
    return (

        <header>
            <Link to="/">
                <img src={logo} alt="logo d'ArgentBank" />
            </Link>
            {isLogged ? (<div className="header-buttons"><ProfileName /><LogoutButton /></div>) : <SigninButton />}
        </header>
    )
}
export default Header
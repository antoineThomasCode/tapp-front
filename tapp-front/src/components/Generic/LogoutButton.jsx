import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { stopSession } from "../../redux/features/loginSlice";
import {cleanUserProfile } from "../../redux/features/userProfile"
function LogoutButton () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const  logOut = () => {
        dispatch(stopSession())
        dispatch(cleanUserProfile())
        navigate("/")
       
    }

    return (
        <button onClick={logOut} ><i className="fa fa-sign-out"></i>Sign Out</button>
    )
}
export default LogoutButton
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import requestHandler from "../../utils/genericFetch";
import {getUserInfos} from "../../redux/features/userProfile"
import { useState } from "react";
import './Welcome.scss'
import ChangeNameModal from "./ChangeNameModal";
function Welcome () {

    const dispatch = useDispatch()
    const token = useSelector((state) => state.login.token)
    const firstName = useSelector((state) => state.userProfile.firstName)
    const lastName = useSelector((state) => state.userProfile.lastName)
    const [changeName, setChangeName] = useState(false)

    const openChangeNameModale= () => {
        setChangeName(true)
    }
    const closeChangeNameModale = () => {
        setChangeName(false)
    }
    const postApi = async () => {
        const response = await requestHandler({
            url: `http://localhost:3001/api/v1/user/profile/`,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer' + token
                },
        });
        if (response.status === 200) {
            dispatch(getUserInfos(response.body))
            } 
        };
        postApi();
    
    return (
        <div className="welcome-container">
            <h1>Welcome back {changeName ? (null) : <br />}{changeName ? (null) : firstName} {changeName ? (null) : lastName} !</h1>
            {changeName ? (<ChangeNameModal  closeChangeNameModal={closeChangeNameModale}/>) : false}
            {changeName ? (null) : <button onClick={openChangeNameModale} className='button edit-button'>Edit name</button>}
        </div>
    )
}
export default Welcome
import React from "react";
import "./ChangeNameModale.scss"
import '../Generic/Button.scss'
import GenericInput from "../Generic/Input";
import { useSelector } from "react-redux";
import {useState} from 'react'
import requestHandler from "../../utils/genericFetch";
import { nameIsCorrect} from '../../utils/formValidation'
import GenericForm from "../Generic/GenrericForm";
import { useDispatch } from "react-redux";
import {getUserInfos} from '../../redux/features/userProfile'
import {baseUrl} from "../../utils/APIpaths";

function ChangeNameModal ({closeChangeNameModal}) {
    const firstName = useSelector((state) => state.userProfile.firstName)
    const lastName = useSelector((state) => state.userProfile.lastName)
    const token = useSelector((state) => state.login.token)
    const [firsName, setFirstName] = useState('')
    const [newLastName, setLastName] = useState('')
    const dispatch = useDispatch()
    
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

    const sendDataToBack = (e) => {
        e.preventDefault()
        if (firsName && newLastName && nameIsCorrect(firsName) && nameIsCorrect(newLastName)) {
            const postApi = async () => {
                const bodyPost = {
                    firstName : firsName,
                    lastName : newLastName
                  }
                const response = await requestHandler({
                    url: `${baseUrl}/user/profile/`,
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': 'Bearer' + token
                        },
                    body: JSON.stringify(bodyPost),
                    errMsg: 'Fail to change user infos'
                });
                if (response?.status === 200) {
                    const newInfos = {
                        firstName : firsName,
                        lastName : newLastName
                    }
                    dispatch(getUserInfos(newInfos))
                    closeChangeNameModal()
                } else {
                    console.log(response)
                }
                
            };
            postApi();

        } 
        
    }
    
 

    return (
        <div className="changeNameModale">    
            <GenericForm action="POST"  className='changeNameForm' >
                <GenericInput htmlFor="firstname" type="text" id="firstname" label='firstName' placeholder={firstName} handleChangeFunction={handleChangeFirstName}/>
                <GenericInput htmlFor="lastname" type="text" id="lastname" label='lastname' placeholder={lastName} handleChangeFunction={handleChangeLastName}/>
                <div className="cta-buttons">
                    <button className="button edit-button" onClick={(e) => sendDataToBack(e)}>Save</button>
                    <button className="button edit-button "  onClick={closeChangeNameModal}>Cancel</button>
                </div>
            </GenericForm>
        </div>
    )
}
export default ChangeNameModal
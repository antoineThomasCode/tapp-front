import React from "react";
import AccountCard from "./AccountCard";
import Welcome from "./Welcome";


import './UserProfileContent.scss'

function UserProfilContent () {
    
    return (
        <div className="userProfile-container">
            <Welcome  />
            <AccountCard titleAccount='Argent Bank Checking (x8349)' amountAccount="2,082.79" amountDescription="Available Balance"/>
            <AccountCard titleAccount='Argent Bank Savings (x6712)' amountAccount="10,928.42" amountDescription="Available Balance"/>
            <AccountCard titleAccount='Argent Bank Credit Card (x8349)' amountAccount="184.30" amountDescription="Current Balance"/>
        </div>
    )
}
export default UserProfilContent
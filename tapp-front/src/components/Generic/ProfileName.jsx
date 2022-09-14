import React from "react";
import { useSelector } from "react-redux";


function ProfileName () {
    const firstName = useSelector((state) => state.userProfile.firstName)

    return (
        <div className="header-buttons"><i className="fa fa-user-circle"></i>{firstName}</div>
    )
}

export default ProfileName
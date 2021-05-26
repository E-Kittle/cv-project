import React from 'react';
import '../managers.css';

const PersonalResume = (props) => {
    const { name, phone, address, email } = props.persInfo;
    return (

        <div className="personalInfoWrapper">
            <h2>{name}</h2>
            <p>{address} <span>|</span> {phone} <span>|</span> {email}</p>
        </div>
    )
}

export default PersonalResume;
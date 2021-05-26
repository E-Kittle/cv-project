import React from 'react';
import '../managers.css';

const PersonalResume = (props) => {
    const { name, phone, address, email, objective } = props.persInfo;
    return (
        <div>
        <div className="personalInfoWrapper">
            <h2>{name}</h2>
            <div>
                <p>{address} <span>|</span> {phone} <span>|</span> {email}</p>
            </div>
        </div>
            <div className="section">
                <h2>Objective</h2>
                <p>{objective}</p>
            </div>
        </div>
    )
}

export default PersonalResume;
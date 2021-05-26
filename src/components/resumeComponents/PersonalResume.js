import React from 'react';
import '../managers.css';

const PersonalResume = (props) => {
    return (
        <div className="personalInfoWrapper">
            {/* <h2>{props.persInfo.name}</h2> */}
            <p>Tampa, Fl, 33777 <span>|</span> (727)-470-7042 <span>|</span> example@example.com</p>
        </div>
    )
}

export default PersonalResume;
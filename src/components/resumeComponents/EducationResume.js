import React from 'react';

function EducationResume(props) {
    //map through an array of education objects and create the correct div element for them, then place the array in the DOM

    return(
        <div>
            <h3>University of this sucks</h3>
            <p>Receptionist <span>|</span> Largo, Fl <span>|</span> May 2012 - Present</p>
        </div>
    )

}

export default EducationResume;


    //     <form>
    //     <label htmlFor="schoolName">School Name</label>
    //     <input type="text" id="schoolName" name="schoolName" placeholder="School Name" onChange={}></input>

    //     <label htmlFor="schoolLocation">School Location</label>
    //     <input type="text" id="schoolLocation" name="schoolLocation" placeholder="School Location" onChange={}></input>

    //     <label htmlFor="degree">Degree</label>
    //     <input type="text" id="degree" name="degree" placeholder="Degree" onChange={}></input>

    //     <label htmlFor="schoolStart">Start Date</label>
    //     <input type="text" id="schoolStart" name="schoolStart" placeholder="Start Date: Any Format" onChange={}></input>

    //     <label htmlFor="schoolEnd">End Date</label>
    //     <input type="text" id="schoolEnd" name="schoolEnd" placeholder="End Date: Any Format" onChange={}></input>

    //     <label htmlFor="schoolAchievements">Description of Achievements</label>
    //     <textarea id="schoolAchievements" name="schoolAchievements" placeholder="Description of Achievements" onChange={}></textarea>
    // </form>
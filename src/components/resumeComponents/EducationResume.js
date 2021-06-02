import React from 'react';

function EducationResume(props) {
    //map through an array of education objects and create the correct div element for them, then place the array in the DOM
    const { educationArr } = props;

    const educationSection = educationArr.map((school) => {
        return (

            <div className="educat" key={school.id}>
                <h3>{school.schoolName}</h3>
                <p>{school.degree} <span>|</span> {school.schoolLocation} <span>|</span> {school.schoolDates}</p>
                <p>{school.schoolAchievements}</p>
            </div>
                )
    })
    return(
        <div>
            {/* <div className="educat">
                <h3>University of this ALSO sucks</h3>
                <p>Bachelors in exhaustion <span>|</span> Largo, Fl <span>|</span> May 2012 - Present</p>
                <h4>Achievements: </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officia, necessitatibus consequatur est aliquam in tempore dolor excepturi nesciunt odit quaerat placeat hic quas ullam, maiores voluptas quasi sint similique quam animi enim ut doloremque totam quos! Repudiandae temporibus dolorem quasi!</p>
            </div> */}
            {educationSection}
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
import React from "react";


//Need form elements for: School name, location, degree, start date, end date, description of achievements

function EducationForm(props) {
    return (
        <form>
            <label htmlFor="schoolName">School Name</label>
            <input type="text" id="schoolName" name="schoolName" placeholder="School Name" onChange={}></input>

            <label htmlFor="schoolLocation">School Location</label>
            <input type="text" id="schoolLocation" name="schoolLocation" placeholder="School Location" onChange={}></input>

            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" placeholder="Degree" onChange={}></input>

            <label htmlFor="schoolDates">Dates Attended - Example: May 2018-Present</label>
            <input type="text" id="schoolDates" name="schoolDates" placeholder="Dates Attended - Example: May 2018-Present" onChange={}></input>

            {/* <label htmlFor="schoolEnd">End Date</label>
            <input type="text" id="schoolEnd" name="schoolEnd" placeholder="End Date: Any Format" onChange={}></input> */}

            <label htmlFor="schoolAchievements">Description of Achievements</label>
            <textarea id="schoolAchievements" name="schoolAchievements" placeholder="Description of Achievements" onChange={}></textarea>
        </form>
    )
}

export default EducationForm;
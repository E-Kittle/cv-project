import React from "react";


function EducationForm(props) {
    return (
        <form>
            <label htmlFor="workName">Company Name</label>
            <input type="text" id="workName" name="workName" placeholder="Company Name" onChange={}></input>

            <label htmlFor="companyLocation">Company Location</label>
            <input type="text" id="companyLocation" name="companyLocation" placeholder="Company Location" onChange={}></input>

            <label htmlFor="role">Role</label>
            <input type="text" id="role" name="role" placeholder="Role" onChange={}></input>

            <label htmlFor="workDates">Dates Worked - Example: May 2018-Present</label>
            <input type="text" id="workDates" name="workDates" placeholder="Dates Worked - Example: May 2018-Present" onChange={}></input>

            {/* <label htmlFor="workEnd">End Date</label>
            <input type="text" id="workEnd" name="workEnd" placeholder="End Date: Any Format" onChange={}></input> */}

            <label htmlFor="workAchievements">Description of Role</label>
            <textarea id="workAchievements" name="workAchievements" placeholder="Description of Role" onChange={}></textarea>
        </form>
    )
}

export default EducationForm;
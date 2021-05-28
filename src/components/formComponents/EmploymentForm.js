import React from "react";


function EducationForm(props) {

    let employmentSection = [];


    const newEmploymentHandler = () => {
            console.log('worked')
        // employmentSection.push(createNewForm());
        // console.log(educationSection);
        // console.log('would add new employment section')
    }

    const createNewForm = () => {
        // return (
        //     <form>
        //         <label htmlFor="workName">Company Name</label>
        //         <input type="text" id="workName" name="workName" placeholder="Company Name"></input>

        //         <label htmlFor="workLocation">Company Location</label>
        //         <input type="text" id="workLocation" name="workLocation" placeholder="Company Location"></input>

        //         <label htmlFor="role">Role</label>
        //         <input type="text" id="role" name="role" placeholder="Role"></input>

        //         <label htmlFor="workDates">Dates Worked - Example: May 2018-Present</label>
        //         <input type="text" id="workDates" name="workDates" placeholder="Dates Worked - Example: May 2018-Present" ></input>

        //         <label htmlFor="workAchievements">Description of Role</label>
        //         <textarea id="workAchievements" name="workAchievements" placeholder="Description of Role" ></textarea>
        //     </form>
        // )
    }

    return (
        <button className="newEploymentButton" onClick={newEmploymentHandler}>+ Add</button>
        // {employmentSection}
    )
}

export default EducationForm;
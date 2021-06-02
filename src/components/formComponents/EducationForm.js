import React from "react";


//Need form elements for: School name, location, degree, start date, end date, description of achievements

function EducationForm(props) {
    const { educationArr, handleEducation, handleNewEducation } = props;


    const educationList = educationArr.map((school, index) => {
        return (
            <div key={school.id}>
                <div id="sectionTitle">
                    <h3>Education {index + 1}</h3>
                    <button className="delSkill" id={school.id} onClick={handleEducation}>X</button>
                </div>
                <form>
                    <label htmlFor="schoolName">School Name</label>
                    <input type="text" className={school.id} id="schoolName" name="schoolName" placeholder="School Name" onChange={handleEducation}></input>

                    <label htmlFor="schoolLocation">School Location</label>
                    <input type="text" className={school.id} id="schoolLocation" name="schoolLocation" placeholder="School Location" onChange={handleEducation}></input>

                    <label htmlFor="degree">Degree</label>
                    <input type="text" className={school.id} id="degree" name="degree" placeholder="Degree" onChange={handleEducation}></input>

                    <label htmlFor="schoolDates">Dates Attended - Example: May 2018-Present</label>
                    <input type="text" className={school.id} id="schoolDates" name="schoolDates" placeholder="Dates Attended - Example: May 2018-Present" onChange={handleEducation}></input>

                    <label htmlFor="schoolEnd">End Date</label>
                    <input type="text" className={school.id} id="schoolEnd" name="schoolEnd" placeholder="End Date: Any Format" onChange={handleEducation}></input>

                    <label htmlFor="schoolAchievements">Description of Achievements</label>
                    <textarea className={school.id} id="schoolAchievements" name="schoolAchievements" placeholder="Description of Achievements" onChange={handleEducation}></textarea>
                </form>
            </div>

        )
    });


    return (
        <div>
            {educationList}
            <button className="newEducationButton" onClick={handleNewEducation}>+ Add</button>
        </div>
    )
}

export default EducationForm;
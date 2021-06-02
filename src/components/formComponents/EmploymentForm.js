import React from "react";


function EducationForm(props) {
    const { handleNewEmployment, handleEmployment, employmentArr } = props;

    const employmentSection = employmentArr.map((job, index) => {
        return (
            <div key={job.id}>
                <div id="sectionTitle">
                    <h3>Employer {index + 1}</h3>
                    <button className="delSkill" id={job.id} onClick={handleEmployment}>X</button>
                </div>
                <form>
                    <label htmlFor="workName">Company Name</label>
                    <input type="text" className={job.id} id="workName" name="workName" placeholder={job.workName} onChange={handleEmployment}></input>

                    <label htmlFor="workLocation">Company Location</label>
                    <input type="text" className={job.id} id="workLocation" name="workLocation" placeholder={job.workLocation} onChange={handleEmployment}></input>

                    <label htmlFor="role">Role</label>
                    <input type="text" className={job.id} id="role" name="role" placeholder={job.role} onChange={handleEmployment}></input>

                    <label htmlFor="workDates">Dates Worked - Example: May 2018-Present</label>
                    <input type="text" className={job.id} id="workDates" name="workDates" placeholder={job.workDates} onChange={handleEmployment}></input>

                    <label htmlFor="workAchievements">Description of Role</label>
                    <textarea className={job.id} id="workAchievements" name="workAchievements" placeholder={job.role} onChange={handleEmployment}></textarea>
                </form>
            </div>
        )
    });


    return (
        <div>
            {employmentSection}
            <button className="newEploymentButton" onClick={handleNewEmployment}>+ Add</button>
        </div>
    )
}

export default EducationForm;
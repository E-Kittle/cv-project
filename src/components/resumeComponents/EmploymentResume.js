import React from 'react';

function EmploymentResume(props) {
    //map through an array of education objects and create the correct div element for them, then place the array in the DOM

    const { employmentArr } = props;
    const employmentList = [employmentArr.map((job) => {
        return (
            <div key={job.id}>
                <h3>{job.workName}</h3>
                <p>{job.role} <span>|</span> {job.workLocation} <span>|</span> {job.workDates}</p>
                <p>{job.workAchievements}</p>
            </div>
        )
    })];


    return (
        <div>
            {employmentList}
        </div>
    )

}

export default EmploymentResume;
import React from "react";
import './managers.css';
import PersonalResume from './resumeComponents/PersonalResume';
import SkillsResume from './resumeComponents/SkillsResume';
import EducationResume from './resumeComponents/EducationResume';
import EmploymentResume from './resumeComponents/EmpolymentResume';

class ResumeManager extends React.Component {
    //constructor if needed
    // constructor(props) {
    //     super(props)
    // }


    render() {
        const { persInfo, skillsArr } = this.props;

        return (
            <div className="container resumeContainer">
                <PersonalResume persInfo={persInfo}/>
                <br />
                <div>
                    <h2 className='resuHeader'>Employment Experience</h2>
                    <EmploymentResume />
                    {/* Dynamically load employment information - Use {employment} to create an array in the render section. This allows me to add additional employment as needed */}
                </div>
                <br />
                <div>
                    <h2 className='resuHeader'>Education</h2>
                    <EducationResume />
                    {/* Dynamically add education */}
                </div>
                    <br />
                <div>
                    <h2 className='resuHeader'>Skills</h2>
                    <SkillsResume skillsArr={skillsArr}/>
                    {/* Dynamically add skills */}
                </div>


            </div>

        )
    }
}

export default ResumeManager
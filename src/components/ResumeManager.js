import React from "react";
import './managers.css';
import PersonalResume from './resumeComponents/PersonalResume'

class ResumeManager extends React.Component {
    //constructor if needed
    // constructor(props) {
    //     super(props)
    // }


    render() {
        const { persInfo } = this.props;

        return (
            <div className="container resumeContainer">
                <PersonalResume persInfo={persInfo}/>

                <div>
                    <h2>Employment Experience</h2>
                    {/* Dynamically load employment information - Use {employment} to create an array in the render section. This allows me to add additional employment as needed */}
                </div>

                <div>
                    <h2>Education</h2>
                    {/* Dynamically add education */}
                </div>

                <div>
                    <h2>Skills</h2>
                    {/* Dynamically add skills */}
                </div>


            </div>

        )
    }
}

export default ResumeManager
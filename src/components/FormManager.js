import React from "react";
import './managers.css';
import PersonalForm from "./formComponents/PersonalForm";
import SkillsForm from "./formComponents/SkillsForm";

class FormManager extends React.Component {
    //constructor if needed
    // constructor(props) {
    //     super(props)
    // }


    render() {
        return (
            <div className="container">
                <div className="containerSection">
                    <h2 className="formSection">Personal Information</h2>
                    <PersonalForm handleNameChange={this.props.handleNameChange} />
                    {/* Personal Info Component - Always loads */}
                </div>

                <div className="containerSection">
                    <h2>Employment Experience</h2>
                    {/* Dynamically load employment information - Use {employment} to create an array in the render section. This allows me to add additional employment as needed */}
                </div>

                <div className="containerSection">
                    <h2>Education</h2>
                    {/* Dynamically add education */}
                </div>

                <div className="containerSection">
                    <h2>Skills</h2>
                    <SkillsForm />
                    {/* Dynamically add skills */}
                </div>


            </div>

        )
    }
}

export default FormManager
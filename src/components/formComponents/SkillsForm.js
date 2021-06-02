import React from "react";

function SkillsForm(props) {

    const { handleNewSkill, handleChangedSkill, skillsArr } = props;


    //This loops through the elements and adds the appropriate amount of text elements to the page
    const skillList = skillsArr.map((skill) => {
        return (
            <div key={skill.id}>
                <label htmlFor={skill.id}>Enter Skill</label>
                <input type="text" id={skill.id} name={skill.id} placeholder="JavaScript" onChange={handleChangedSkill} ></input>
            </div>
        )
    })

    return (
        <div>
            {skillList}
            <button id="addSkill" onClick={handleNewSkill} >Add Skill</button>
        </div>
    )
}

export default SkillsForm;

import React from "react";

//Does not have to retain state so this can be a function

function SkillsForm(props) {

    let element = (
        <div>
            <label htmlFor="skill">Enter Skill</label>
            <input type="text" id="skill" name="skill" placeholder="JavaScript"></input>
        </div>
    )

    return(
        <div>
            <button id="addSkill">Add Skill</button>
        </div>
    )
}

export default SkillsForm;
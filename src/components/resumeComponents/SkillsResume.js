import React from 'react';
import SkillsForm from '../formComponents/SkillsForm'

function SkillsResume(props) {
    const { skillsArr } = props;


    const skillRList = skillsArr.map((skill) => {
        return (
            <li key={skill.id}>{skill.skillDescr}</li>
        )
    })


    return(
        <ul>
            {skillRList}
        </ul>
    )
}

export default SkillsResume;


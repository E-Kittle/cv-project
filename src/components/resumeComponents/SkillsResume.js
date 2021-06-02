import React from 'react';

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


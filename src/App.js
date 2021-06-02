import './App.css';
import React from 'react';
import uniqid from 'uniqid';
import './styles/globalStyles.css';
import Header from "./components/Header";
// import FormManager from "./components/FormManager";

// Form Components
import PersonalForm from "./components/formComponents/PersonalForm";
import EmploymentForm from "./components/formComponents/EmploymentForm";
import EducationForm from "./components/formComponents/EducationForm";
import SkillsForm from "./components/formComponents/SkillsForm";

// Resume Components
import PersonalResume from "./components/resumeComponents/PersonalResume";
import EmploymentResume from "./components/resumeComponents/EmploymentResume";
import EducationResume from "./components/resumeComponents/EducationResume";
import SkillsResume from "./components/resumeComponents/SkillsResume";

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      persInfo: {
        name: 'First Last',
        phone: '123-456-7890',
        email: 'sample@sample.com',
        address: 'Tampa, Fl, 33777',
        objective: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, necessitatibus consequatur est aliquam in tempore dolor excepturi nesciunt odit quaerat placeat hic quas ullam, maiores voluptas quasi sint similique quam animi enim ut doloremque totam quos! Repudiandae temporibus dolorem quasi!'
      },

      employmentArr: [],

      employmentInfo: {
        workName: '',
        workLocation: '',
        role: '',
        workDates: '',
        workAchievements: '',
      },

      educationArr: [],

      skillsArr: [],
    }
  }


  //Functions to edit skill
  // User clicks 'add skill', this creates a new skill object and appends it to the skill array in App.js
  handleNewSkill = () => {
    let skill = {
      skillDescr: '',
      id: uniqid(),
    }

    this.setState({
      skillsArr: this.state.skillsArr.concat(skill)
    })
  }

  //Handles changing or deleting a skill. If the className of the target is delSkill, then it deletes the appropriate skill from the 
  //array. If there isn't a className 'delSkill', then it just changes the text
  handleSkill = (e) => {
    let index = this.state.skillsArr.findIndex(skill => {
      return (skill.id === e.target.id)
    })

    let tempArr = [...this.state.skillsArr];
    if (e.target.className === 'delSkill'){
      tempArr.splice(index, 1);
    }
    else {
      tempArr[index].skillDescr = e.target.value;
    }

    this.setState({
      skillsArr: tempArr
    })
  }

  // This handles loading, and saving data dynamically for the personal information
  handleNameChange = (e) => {
    console.log(e.target.id)

    // Start of experiment
    let newName = this.state.persInfo.name;
    let newPhone = this.state.persInfo.phone;
    let newEmail = this.state.persInfo.email;
    let newAddress = this.state.persInfo.address;
    let newObjective = this.state.persInfo.objective;


    if (e.target.id === 'name') {
      newName = e.target.value
    }
    else if (e.target.id === 'phone') {
      newPhone = e.target.value
    }
    else if (e.target.id === 'email') {
      newEmail = e.target.value
    }
    else if (e.target.id === 'address') {
      newAddress = e.target.value
    }
    else {
      newObjective = e.target.value
    }

    this.setState({
      persInfo: {
        name: newName,
        phone: newPhone,
        email: newEmail,
        address: newAddress,
        objective: newObjective
      }
    }, () => console.log(this.state.persInfo))
  };

  render() {
    const { persInfo, skillsArr } = this.state;
    const { handleNameChange, handleNewSkill, handleSkill} = this;


    return (
      <div className="pageWrapper">
        <Header />
        <div className="resumeWrapper">
          {/* formManager */}
          {/* <FormManager handleNameChange={this.handleNameChange} handleNewSkill={this.handleNewSkill} skillsArr={skillsArr} handleChangedSkill={this.handleChangedSkill} handleSkill={this.handleSkill} handleDelSkill={this.handleDelSkill}/> */}
          <div className="container">
                <div className="containerSection">
                    <h2 className="formSection">Personal Information</h2>
                    <PersonalForm handleNameChange={handleNameChange} />
                    {/* Personal Info Component - Always loads */}
                </div>

                <div className="containerSection">
                    <h2>Employment Experience</h2>
                    <EmploymentForm />
                    {/* Dynamically load employment information - Use {employment} to create an array in the render section. This allows me to add additional employment as needed */}
                </div>

                <div className="containerSection">
                    <h2>Education</h2>
                    {/* Dynamically add education */}
                </div>

                <div className="containerSection">
                    <h2>Skills</h2>
                    <SkillsForm handleNewSkill={handleNewSkill} skillsArr={skillsArr} handleSkill={handleSkill}/>
                    {/* Dynamically add skills */}
                </div>
            </div>


          {/* resumeManager */}
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
        </div>
      </div>
    );
  }
}

export default App;

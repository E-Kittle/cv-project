import './App.css';
import React from 'react';
import './styles/globalStyles.css';
import Header from "./components/Header";
import FormManager from "./components/FormManager";
import ResumeManager from "./components/ResumeManager";

class App extends React.Component {

  constructor () {
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

      educationArr: [],

      skillsArr: [],
    }
  }

  handleNameChange = (e) => {
    console.log(e.target.id)

    // Start of experiment
    let newName= this.state.persInfo.name;
    let newPhone= this.state.persInfo.phone;
    let newEmail= this.state.persInfo.email;
    let newAddress= this.state.persInfo.address;
    let newObjective= this.state.persInfo.objective;


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
    else{
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
    }, () => console.log(this.state.persInfo) )


    // End of experiment
    // if (e.target.id === 'name') {
    //   this.setState({
    //     persInfo: {
    //       name: e.target.value,
    //       phone: this.state.persInfo.phone,
    //       email: this.state.persInfo.email,
    //       address: this.state.persInfo.address,
    //       objective: this.state.persInfo.objective
    //     }
    //   }, () => console.log(this.state.persInfo) )
    // }
    // else if (e.target.id === 'phone') {
    //   this.setState({
    //     persInfo: {
    //       name: this.state.persInfo.name,
    //       phone: e.target.value,
    //       email: this.state.persInfo.email,
    //       address: this.state.persInfo.address,
    //       objective: this.state.persInfo.objective
    //     }
    //   }, () => console.log(this.state.persInfo) )
    // }
    // else if (e.target.id === 'email') {
    //   this.setState({
    //     persInfo: {
    //       name: this.state.persInfo.name,
    //       phone: this.state.persInfo.phone,
    //       email: e.target.value,
    //       address: this.state.persInfo.address,
    //       objective: this.state.persInfo.objective
    //     }
    //   }, () => console.log(this.state.persInfo) )
    // }
    // else {      //e.target.id then === address
    //   this.setState({
    //     persInfo: {
    //       name: this.state.persInfo.name,
    //       phone: this.state.persInfo.phone,
    //       address: e.target.value,
    //       email: this.state.persInfo.email,
    //       objective: this.state.persInfo.objective
    //     }
    //   }, () => console.log(this.state.persInfo) )
    // }



  };

  render() {
    const { persInfo } = this.state;


    return (
      <div className="pageWrapper">
        <Header />
        <div className="resumeWrapper">
          <FormManager handleNameChange={this.handleNameChange}/>
          <ResumeManager persInfo={persInfo} />
        </div>
      </div>
    );
  }
}

export default App;

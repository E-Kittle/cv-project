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
      },

      employmentArr: [],

      educationArr: [],

      skillsArr: [],
    }
  }

  handleNameChange = (e) => {
    console.log(e.target.id)

    if (e.target.id === 'name') {
      this.setState({
        persInfo: {
          name: e.target.value,
          phone: this.state.persInfo.phone,
          email: this.state.persInfo.email,
          address: this.state.persInfo.address
        }
      }, () => console.log(this.state.persInfo) )
    }
    else if (e.target.id === 'phone') {
      this.setState({
        persInfo: {
          name: this.state.persInfo.name,
          phone: e.target.value,
          email: this.state.persInfo.email,
          address: this.state.persInfo.address
        }
      }, () => console.log(this.state.persInfo) )
    }
    else if (e.target.id === 'email') {
      this.setState({
        persInfo: {
          name: this.state.persInfo.name,
          phone: this.state.persInfo.phone,
          email: e.target.value,
          address: this.state.persInfo.address
        }
      }, () => console.log(this.state.persInfo) )
    }
    else {      //e.target.id then === address
      this.setState({
        persInfo: {
          name: this.state.persInfo.name,
          phone: this.state.persInfo.phone,
          address: e.target.value,
          email: this.state.persInfo.email,
        }
      }, () => console.log(this.state.persInfo) )
    }



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

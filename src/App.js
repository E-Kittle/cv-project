import './App.css';
import React from 'react';
import './styles/globalStyles.css';
import Header from "./components/Header";
import FormManager from "./components/FormManager";
import ResumeManager from "./components/ResumeManager";

class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      persInfo: {
        name: '',
        phone: '',
        email: '',
        address: '',
      },

      employmentArr: [],

      educationArr: [],

      skillsArr: [],
    }
  }

  handleNameChange = (e) => {
    console.log(e.target)
    this.setState({
      persInfo: {
        name: e.target.value
      }
    }, () => console.log(this.state.persInfo.name) )
  };

  render() {
    const { persInfo } = this.state;

    return (
      <div className="pageWrapper">
        <Header />
        <div className="resumeWrapper">
          <FormManager handleNameChange={this.handleNameChange}/>
          <ResumeManager persInfo={persInfo}/>
        </div>
      </div>
    );
  }
}

export default App;

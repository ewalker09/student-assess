import React from "react";

import Student from"./components/Student.js";
import SearchStudName from "./components/SearchStudName.js";
import SearchStudTag from "./components/SearchStudTag.js";

const ASSESS_API = "https://api.hatchways.io/assessment/students";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students:[],
      searchName:'',
      seachedStud:[],
      searchTag:''
    }
  }

  componentDidMount() {
    fetch(ASSESS_API)
    .then(res => res.json())
    .then(data => {
      this.setState({ students: data.students })

    if(this.state.searchName==='' && this.state.searchTag==='') {
      this.setState({searchedStud: this.state.students});
    }
  })
}

  handleSearchByNameChange = (e) => {
    this.setState({searchName: e.target.value}, () => {
        this.setState({searchedStud: (this.state.students.filter(student =>
          student.firstName.toLowerCase().includes(this.state.searchName.toLowerCase())
          || student.lastName.toLowerCase().includes(this.state.searchName)))
        });
    });
  }

  handleSearchByTag = (e) => {
    this.setState({searchTag: e.target.value}, () => {
      if (this.state.searchTag !== '') {
        this.setState({searchedStud: (this.state.students.filter(student => {
          if (student.tags) {
            for (let i = 0; i < student.tags.length; i++) {
              if(student.tags[i].toLowerCase().includes(this.state.searchTag.toLowerCase())) {
                return true;
                }
              }
              return false;
            }
          }))
        });
      } else {
        this.setState({searchedStud: this.state.students});
      }
    });
  }

  render() {
    const { searchedStud } = this.state;
    return (
      <div className="stud-container">
        <div>
          <SearchStudName className="search" handleChange={this.handleSearchByNameChange} searchName={this.state.searchName}/>
          <SearchStudTag className="search" handleChange={this.handleSearchByTag} searchTag={this.state.searchTag}/>
          {searchedStud.map( (student, index) => (
            <Student
            key={student.id}
            student={student}
            allStudents={this.state.students}
            index = {index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

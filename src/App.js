import React, { useEffect, useState } from "react";

import Student from"./components/Student";

const ASSESS_API = "https://api.hatchways.io/assessment/students";

function App() {
  const [students, setStudents] = useState([]);
  const [searchStudent, setSearchStud, searchTag, setSearchTag] = useState('');

  useEffect(() => {
    getStudents(ASSESS_API);
  }, []);

  const getStudents = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.results);
        });
  }

  const handleOnNameSubmit = (e) => {
    e.preventDefault();

    if(searchStudent) {
      getStudents(ASSESS_API+searchStudent);

      setSearchStud("");
    }
  };

  const handleOnNameChange = (e) => {
    setSearchStud(e.target.value);
  };

  const handleOnTagSubmit = (e) => {
    e.preventDefault();

    if(setSearchTag) {
      getStudents(ASSESS_API+searchTag);

      setSearchTag("");
    }
  };

  const handleOnTagChange = (e) => {
    setSearchTag(e.target.value);
  };

    return (
      <>
      <header>
        <form onSubmit={handleOnNameSubmit}>
          <input className="search"
          type="search"
          placeholder="Search Name..."
          value ={searchStudent}
          onChange={handleOnNameChange}
          />
        </form>
        <form onSubmit={handleOnTagSubmit}>
          <input className="search"
          type="search"
          placeholder="Search Tag..."
          value ={searchTag}
          onChange={handleOnTagChange}
          />
        </form>
      </header>
      <div className="stud-container">
          {students.length > 0 &&
            students.map((student) => <Student key={student
            .id} {...student} />)}
      </div>
</>
    );
  }

export default App;

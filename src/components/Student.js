import React from "react";

const IMG_API = "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images";

const Student = ({name}
) => (
  <div className="student">
    <img src={IMG_API} alt={name} />
    <div className="stud-info">
    <h3>{name}</h3>
    </div>
  </div>
)

export default Student;

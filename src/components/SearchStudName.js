import React from "react";

const SearchStudName = props => {

  return (
    <div className="search-container">
      <input id="search-name" type="search" value={props.searchName} onChange={props.handleChange} placeholder="Search Student By Name"/>
    </div>
  );
}

export default SearchStudName;

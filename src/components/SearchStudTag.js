import React from "react";

const SearchStudTag = props => {

  return (
    <div className="search-container">
      <input id="search-tag" type="search" value={props.searchTag} onChange={props.handleChange} placeholder="Search Student By Tag"/>
    </div>
  );
}

export default SearchStudTag;

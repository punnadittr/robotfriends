import React from "react";

const SearchBox = ({ searchfield, searchChage }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChage}
      />
    </div>
  );
};

export default SearchBox;

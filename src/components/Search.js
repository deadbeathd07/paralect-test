import React from "react";

function Search({ value, handleKeyPress, searchIcon, placeholder }) {
  return (
    <div className="search">
      <label className="search__label">
        <img className="search__icon" src={searchIcon} alt="Search" />
        <input
          type="text"
          className="search__input"
          placeholder={placeholder}
          defaultValue={value}
          onKeyPress={(event) => handleKeyPress(event)}
        />
      </label>
    </div>
  );
}

export default Search;

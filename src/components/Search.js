import React from "react";

function Search({setSearch }) {
  function handleOnChange(event){
    setSearch(event.target.value);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Search;

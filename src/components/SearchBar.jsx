import React from "react";
import PropTypes from "prop-types";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input">🔍 Tìm Kiếm</label>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tìm kiếm công việc..."
      />
    </div>
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;

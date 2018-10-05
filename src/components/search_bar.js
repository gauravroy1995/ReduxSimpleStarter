import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "Guarav" };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={event => {
            this.setState(event.target.value);
          }}
        />
      </div>
    );
  }
}

export default SearchBar;

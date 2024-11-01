import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.searchKeyword || "",
    };
  }

  onKeywordChangeHandler = (event) => {
    this.setState({ keyword: event.target.value }, () => {
      this.props.onSearch(this.state.keyword);
    });
  };

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;

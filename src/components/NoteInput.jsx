import React from "react";
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
  }

  onTitleHandleChange = (event) => {
    const maxChar = 50;
    const title = event.target.value.slice(0, maxChar);
    this.setState({ title });
  };

  onBodyChangeHandler = (event) => {
    this.setState({ body: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.addNote(this.state);
      this.setState({ title: "", body: "" });
    }
  };

  render() {
    return (
      <div className="note-input">
        <h2>Tambah Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.onTitleHandleChange}
          />
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - this.state.title.length}
          </p>
          <textarea
            placeholder="Tuliskan Catatanmu disini"
            value={this.state.body}
            onChange={this.onBodyChangeHandler}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;

import React from "react";
import NoteSearch from "./components/NoteSearch";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { noteData } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: noteData,
      searchKeyword: "",
    };
  }

  onAddNoteHandler = ({ title, body }) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  };

  onDeleteHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  };

  onArchiveHandler = (id) => {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  };

  onSearchHandler = (keyword) => {
    this.setState({ searchKeyword: keyword });
  };

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => !note.archived);
    const archivedNotes = filteredNotes.filter((note) => note.archived);
    return (
      <div className="note-app">
        <h1>Aplikasi Catatan</h1>
        <NoteSearch
          searchKeyword={this.state.searchKeyword}
          onSearch={this.onSearchHandler}
        />

        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            type={"active"}
          />
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchive={this.onArchiveHandler}
            type={"archived"}
          />
        </div>
      </div>
    );
  }
}

export default App;

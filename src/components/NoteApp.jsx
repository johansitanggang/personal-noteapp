import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onDeleteItemHandler = this.onDeleteItemHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveItemHandler = this.onArchiveItemHandler.bind(this);
  }

  onDeleteItemHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveItemHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toLocaleDateString("id-ID", options),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    this.setState({ searchKeyword: event.target.value });
  }

  render() {
    // Use includes to cek if searchKeyword state is included in note title or not
    const activeNotes = this.state.notes.filter((note) => !note.archived).filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

    const archivedNotes = this.state.notes.filter((note) => note.archived).filter((note) => note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()));

    return (
      <div className="note-app">
        <NoteHeader onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList notes={activeNotes} onDelete={this.onDeleteItemHandler} onArchive={this.onArchiveItemHandler} />
          <h2>Arsip</h2>
          <NoteList notes={archivedNotes} onDelete={this.onDeleteItemHandler} onArchive={this.onArchiveItemHandler} />
        </div>
      </div>
    );
  }
}

export default NoteApp;

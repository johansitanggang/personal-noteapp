import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchive={note.archived} {...note} />) : <p className="notes-list__empty-message">Tidak ada catatan</p>}
    </div>
  );
}

export default NoteList;

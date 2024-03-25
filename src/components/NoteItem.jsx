import React from "react";
import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
    </div>
  );
}

export default NoteItem;

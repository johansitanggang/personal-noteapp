import React from "react";

function ArchiveButton({ id, onArchive, isArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchive ? "UnArchive" : "Archive"}
    </button>
  );
}

export default ArchiveButton;

import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive, type }) => {
  const title = type === "active" ? "Catatan Aktif" : "Catatan Arsip";
  return (
    <div className="note-list">
      <h2>{title}</h2>
      {notes <= 0 ? (
        <p className="note-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="note-list__content">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;

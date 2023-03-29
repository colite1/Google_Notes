import AddNote from "./AddNote";
import Note from "./Note";
const NoteList = ({ notes, handleAddNote, handleDeleteNote, id }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            text={note.text}
            date={note.date}
            id={note.id}
            handleDelete={handleDeleteNote}
          />
        );
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NoteList;

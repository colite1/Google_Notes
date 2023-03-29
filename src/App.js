import NoteList from "./components/NoteList";
import "./styles.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import Search from "./components/Search";
export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "29/4/2023"
    },
    {
      id: nanoid(),
      text: "This is my Second note",
      date: "29/4/2023"
    },
    {
      id: nanoid(),
      text: "This is my Third note",
      date: "29/4/2023"
    }
  ]);
  const deleteNote = (id) => {
    const modifiedNoteList = notes.filter((item) => item.id !== id);
    setNotes(modifiedNoteList);
  };

  const addNote = (newEntredNote) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: newEntredNote,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchText={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

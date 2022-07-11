import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const LOCAL_STORAGE_KEY = 'SavedNotes';
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  const [filterText, setFilterText] = useState('');
  const [mode, setMode] = useState(true); // false=Normal - true=Dark

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNotesArr = [...notes,
    {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }];
    setNotes(newNotesArr);
  }

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className={`container ${mode ? 'dark-mode' : ''}`}>
      <Header setMode={setMode} />
      <Search
        filterText={filterText}
        setFilterText={setFilterText} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(filterText.toLowerCase()))} 
        addNote={addNote}
        removeNote={removeNote} />
    </div>
  );
}

export default App;
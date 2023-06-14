import { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";
import "./styles.css";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import EditNote from "./Components/EditNote";


export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("react-notes-app-data"))??[
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "10/04/2023"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "20/04/2023"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "25/04/2023"
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2023"
    }
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkmode] = useState(false);
  
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const editNote = (text, id) => {
    const date = new Date();
    const newNote = {
      id: id,
      text: text,
      date: date.toLocaleDateString()
    };
    const filterdNote = notes.filter(note => note.id !== id);
    const newNotes = [...filterdNote, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    /*const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if(savedNotes){
      setNotes(savedNotes); 
    } */
  }, []); 

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <div className="container">
        <Header handleDarkMode={setDarkmode} />
        <Search handleSearchNote={setSearchText} />
        <Routes>
          <Route path="/" element = {<NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />} />
          <Route path="/edit/:id" element = {<EditNote notes={notes} handleEditNote={editNote}/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

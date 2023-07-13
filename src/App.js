import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import Createnote from './components/Createnote';
import { useState } from "react";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
     
      <Createnote
     onAdd={addNote} />

      {notes.map((noteItem, index) =>
        <Note
          key={index}
          id={index}
          text={noteItem}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;


//  you're using our arrow function in order

// to pass a function that maps through our array of notes

// and for each of the notes inside the array, it's going to carry out this functionality which is to create

// a new note using the properties from that note.   you are doing this in line 14-19
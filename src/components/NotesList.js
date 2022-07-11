import React from 'react'
import AddNote from './AddNote';
import Note from './Note';

const NotesList = (props) => {
  return (
    <div className='notes-list'>
        {props.notes.map((note, index) => {
            return <Note 
                text={note.text}
                date={note.date}
                id={note.id}
                removeNote={props.removeNote} />
        })}
        <AddNote addNote={props.addNote} />
    </div>
  );
}

export default NotesList;
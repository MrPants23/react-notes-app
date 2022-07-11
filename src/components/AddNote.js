import React, { useState } from 'react';

const AddNote = (props) => {
    const [noteText, setNoteText] = useState('');
    const MAX_LENGTH = 200;

    const handleChange = (e) => {
        if (e.target.value.length <= MAX_LENGTH) {
            setNoteText(e.target.value);
        }
    }

    const handleSaveClick = () => {
        props.addNote(noteText);
        setNoteText('');
    }

    return (
        <div className='note new'>
            <textarea rows={8} cols={10} placeholder="Type to add a note..." onChange={(e) => handleChange(e)} value={noteText}></textarea>
            <div className='note-footer'>
                <small>{MAX_LENGTH - noteText.length} Remaining</small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
}

export default AddNote;
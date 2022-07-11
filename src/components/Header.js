import React from 'react';

const Header = (props) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button className='save' onClick={() => props.setMode((currMode) => !currMode)}>Toggle Mode</button>
        </div>
    );
}

export default Header;
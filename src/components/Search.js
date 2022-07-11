import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = (props) => {
    return (
        <div className='search'>
            <MdSearch className='search-icons' size='1.3em' />
            <input type='text' placeholder='type to search...' value={props.filterText} onChange={(e) => props.setFilterText(e.target.value)} />
        </div>
    );
}

export default Search;
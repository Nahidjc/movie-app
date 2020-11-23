import React from 'react';

const SearchBow = (props) => {
    return (
        <div>
            <div className='col'>
                <input
                    className='form-control'
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder='Type to search...'
                ></input>
            </div>
        </div>
    );
};

export default SearchBow;
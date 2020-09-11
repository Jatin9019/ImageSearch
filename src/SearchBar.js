import React from 'react';
export const SearchBar=(props)=>{
    return(
        <div className='form-group'>
            <label>Search</label>
            <input type='text' onChange = {props.takeInput} placeholder='What to search'></input>
            <button onClick={props.btClick} className='btn btn-primary'>Search</button>
        </div>
        );
}
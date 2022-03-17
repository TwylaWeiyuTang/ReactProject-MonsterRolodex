import React from 'react'
import './searchBox.css'

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input type='search' placeholder={placeholder} className='search'
    onChange={handleChange} />
  )
  // we can reuse this searchbox component anywhere we want
}

export default SearchBox
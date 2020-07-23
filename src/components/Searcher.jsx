import React from 'react'

const Searcher = ({ onChangeHandler }) => {
  return (
    <>
      <label htmlFor='search-input'>Introduce your term to find</label>
      <input
        onChange={event => onChangeHandler(event.target.value)}
        name='searcher'
        id='search-input'
        placeholder='Introduce your term to find'
        type='text'
      />
    </>
  )
}

export default Searcher

import React from 'react'
import { useSelector } from 'react-redux'
import { emptySearchFields } from '../app/slices/starshipsSlice'

const Searcher = ({ onChangeHandler }) => {
  const nonSelectedSearchFields = useSelector(emptySearchFields)
  const message = nonSelectedSearchFields
    ? 'Select one field at least'
    : 'Introduce your term to find'
  return (
    <>
      <label htmlFor='search-input'>{message}</label>
      <input
        onChange={event => onChangeHandler(event.target.value)}
        name='searcher'
        disabled={nonSelectedSearchFields}
        id='search-input'
        placeholder={message}
        type='text'
      />
    </>
  )
}

export default Searcher
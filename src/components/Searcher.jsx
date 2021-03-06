import React from 'react'
import { useSelector } from 'react-redux'
import { emptySearchFields } from '../app/slices/starshipsSlice'
import style from './Searcher.module.css'

const Searcher = ({ onChangeHandler }) => {
  const nonSelectedSearchFields = useSelector(emptySearchFields)
  const message = nonSelectedSearchFields
    ? 'Select one field at least'
    : 'Introduce your term to find'
  return (
    <>
      <label className={style.label} htmlFor='search-input'>
        {message}
      </label>
      <input
        className={style.input}
        disabled={nonSelectedSearchFields}
        id='search-input'
        name='searcher'
        onChange={event => onChangeHandler(event.target.value)}
        placeholder={message}
        type='text'
      />
    </>
  )
}

export default Searcher

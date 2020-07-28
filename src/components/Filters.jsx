import React from 'react'
import {
  sortBy,
  setOrderFieldName,
  ascendingOrder,
  toggleOrder,
  searchByTerm,
  syncSelectedFields
} from '../app/slices/starshipsSlice'

import Select from './Select'
import Toggle from './Toggle'
import Searcher from './Searcher'
import FieldsSelector from './FieldsSelector'

import styles from './Filters.module.css'

import { useSelector, useDispatch } from 'react-redux'

const Filters = ({ fields }) => {
  const dispatch = useDispatch()
  const isOn = useSelector(ascendingOrder)

  return (
    <aside>
      <h2>Filters</h2>
      <div className={styles.div}>
        <fieldset className={styles.fieldset}>
          <legend>Find by field with order</legend>
          <Select
            fields={fields}
            onChangeHandler={selectedField => {
              dispatch(setOrderFieldName(selectedField))
              dispatch(sortBy())
            }}
          />
          <Toggle
            isOn={isOn}
            onChangeHandler={() => {
              dispatch(toggleOrder())
              dispatch(sortBy())
            }}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend>Select one field at least and find a term on them</legend>
          <Searcher
            onChangeHandler={searchTerm => {
              dispatch(searchByTerm(searchTerm))
            }}
          />
          <FieldsSelector
            fields={fields}
            onChangeHandler={selectedField => {
              dispatch(syncSelectedFields(selectedField))
            }}
          />
        </fieldset>
      </div>
    </aside>
  )
}

export default Filters

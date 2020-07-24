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

import { useSelector, useDispatch } from 'react-redux'

const Filters = ({ fields }) => {
  const dispatch = useDispatch()
  const isOn = useSelector(ascendingOrder)

  return (
    <aside>
      <h2>Filters</h2>
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
    </aside>
  )
}

export default Filters

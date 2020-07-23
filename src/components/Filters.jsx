import React from 'react'
import {
  sortBy,
  setOrderFieldName,
  ascendingOrder,
  toggleOrder
} from '../app/slices/starshipsSlice'

import Select from './Select'
import Toggle from './Toggle'

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
    </aside>
  )
}

export default Filters

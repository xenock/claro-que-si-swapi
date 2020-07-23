import React, { useEffect } from 'react'
import {
  filteredStarships,
  sortBy,
  setOrderFieldName,
  ascendingOrder,
  toggleOrder,
  getStarshipsAPI
} from './app/slices/starshipsSlice'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'

import Toggle from './components/Toggle'
import Select from './components/Select'

function App () {
  const starships = useSelector(filteredStarships)
  const isOn = useSelector(ascendingOrder)
  const dispatch = useDispatch()

  const fields = [
    'name',
    'model',
    'manufacturer',
    'cost_in_credits',
    'length',
    'max_atmosphering_speed',
    'crew',
    'passengers',
    'cargo',
    'consumables',
    'hyperdrive_rating',
    'MGLT',
    'starship_class'
  ]

  useEffect(() => {
    dispatch(getStarshipsAPI())
  }, [dispatch])

  return (
    <main className='App'>
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
      <table>
        <thead>
          <tr>
            {fields.map(field => (
              <td key={Math.random()}>{field.replace(/_/gi, ' ')}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {starships.length &&
            starships.map(starship => (
              <tr key={Math.random()}>
                {fields.map(field => (
                  <td key={Math.random()}>{starship[field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  )
}

export default App

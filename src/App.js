import React, { useEffect } from 'react'
import { getStarshipsAPI } from './app/slices/starshipsSlice'
import { useDispatch } from 'react-redux'

import './App.css'

import Filters from './components/Filters'
import Table from './components/Table'

function App () {
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
      <Filters fields={fields} />
      <Table fields={fields}/>
    </main>
  )
}

export default App

import React, { useEffect } from 'react'
import { getStarshipsAPI, selectedStarship } from './app/slices/starshipsSlice'
import { useDispatch, useSelector } from 'react-redux'

import styles from './App.module.css'

import Filters from './components/Filters'
import Table from './components/Table'
import StarshipViewer from './components/StarshipViewer'

function App () {
  const dispatch = useDispatch()
  const starship = useSelector(selectedStarship)

  console.log(starship)

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
    <main className={styles.app}>
      <h1>Star Wars Starship App</h1>
      {!starship ? (
        <>
          <Filters fields={fields} />
          <Table fields={fields} />
        </>
      ) : (
        <StarshipViewer fields={fields} />
      )}
    </main>
  )
}

export default App

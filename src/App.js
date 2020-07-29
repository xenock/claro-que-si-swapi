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

  const fields = [
    'name',
    'cost_in_credits',
    'length',
    'crew',
    'passengers',
    'consumables',
    'hyperdrive_rating',
    'MGLT',
    'starship_class'
  ]

  const extendedFields = [
    'model',
    'manufacturer',
    'max_atmosphering_speed',
    'cargo_capacity'
  ]

  useEffect(() => {
    dispatch(getStarshipsAPI())
  }, [dispatch])

  return (
    <main className={styles.app}>
      <h1 className={styles.h1}>Star Wars Starship App</h1>
      {!starship ? (
        <>
          <Filters fields={fields} />
          <Table fields={fields} />
        </>
      ) : (
        <StarshipViewer fields={fields} extendedFields={extendedFields} />
      )}
    </main>
  )
}

export default App

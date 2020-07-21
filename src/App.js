import React, { useEffect, useState } from 'react'
import {
  rawStarships,
  filteredStarships,
  getStarshipsAPI
} from './app/slices/starshipsSlice'
import { useSelector, useDispatch } from 'react-redux'

import './App.css'

import Button from './components/Button'

function App () {
  const starships = useSelector(rawStarships)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStarshipsAPI())
  }, [])

  return (
    <main className='App'>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Model</td>
            <td>Manufacturer</td>
            <td>Cost in credits</td>
            <td>Length</td>
            <td>Max atmosphering speed</td>
            <td>Crew</td>
            <td>Passengers</td>
            <td>Cargo</td>
            <td>Consumables</td>
            <td>Hiperdrive rating</td>
            <td>MGLT</td>
            <td>Starship Class</td>
          </tr>
        </thead>
        <tbody>
          {starships.length &&
            starships.map(starship => (
              <tr>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.cost_in_credits}</td>
                <td>{starship.length}</td>
                <td>{starship.max_atmosphering_speed}</td>
                <td>{starship.crew}</td>
                <td>{starship.passengers}</td>
                <td>{starship.cargo}</td>
                <td>{starship.consumables}</td>
                <td>{starship.hyperdrive_rating}</td>
                <td>{starship.MGLT}</td>
                <td>{starship.starship_class}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  )
}

export default App

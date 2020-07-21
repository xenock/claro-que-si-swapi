import React from 'react'
import {
  setLoading,
  setUnloading,
  toggleLoading,
  loading
} from './app/slices/loaderSlice'
import { useSelector, useDispatch } from 'react-redux'

import logo from './logo.png'
import './App.css'

import Button from './components/Button'

function App () {
  const isLoading = useSelector(loading)
  const dispatch = useDispatch()
  return (
    <main className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Button onClickHandler={_ => dispatch(setLoading())}>Set Loading</Button>
      <Button onClickHandler={_ => dispatch(setUnloading())}>
        Set Unloading
      </Button>
      <Button onClickHandler={_ => dispatch(toggleLoading())}>
        Toggle Loading
      </Button>
      <hr />
      <p>{isLoading ? 'cargando...' : 'terminado!'}</p>
    </main>
  )
}

export default App

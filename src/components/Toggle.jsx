import React from 'react'
import styles from './Toggle.module.css'

const Toggle = ({ isOn, onChangeHandler }) => {
  return (
    <>
      <label className={styles.switch}>
        <input
          className={styles.input}
          checked={isOn}
          onChange={onChangeHandler}
          type='checkbox'
        />
        <span className={styles.slider}></span>
      </label>
      <p> {isOn ? 'ascending' : 'descending'} </p>
    </>
  )
}

export default Toggle

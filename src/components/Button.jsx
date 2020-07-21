import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, onClickHandler }) => (
  <button className={styles.button} onClick={onClickHandler}>
    {children}
  </button>
)

export default Button

import React, { useEffect } from 'react'
import styles from './Select.module.css'

const Select = ({ fields, onChangeHandler }) => {
  useEffect(() => {
    onChangeHandler(fields[0])
  }, [])

  return (
    fields.length && (
      <select
        className={styles.select}
        name='select'
        onChange={event => {
          onChangeHandler(event.target.value)
        }}
      >
        {fields.map(field => (
          <option key={Math.random()} value={field}>
            {field.replace(/_/gi, ' ')}
          </option>
        ))}
      </select>
    )
  )
}

export default Select

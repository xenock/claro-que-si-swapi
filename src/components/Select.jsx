import React, { useEffect } from 'react'
import styles from './Select.module.css'

const Select = ({ fields, onChangeHandler }) => {
  useEffect(() => {
    onChangeHandler(fields[0])
  }, [fields, onChangeHandler])

  return (
    fields.length && (
      <select
        className={styles.select}
        name='select'
        onChange={event => {
          onChangeHandler(event.target.value)
        }}
      >
        {fields.map((field, ix) => (
          <option key={ix} value={field}>
            {field.replace(/_/gi, ' ')}
          </option>
        ))}
      </select>
    )
  )
}

export default Select

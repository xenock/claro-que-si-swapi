import React from 'react'
import styles from './FieldsSelector.module.css'

const FieldsSelector = ({ fields, onChangeHandler }) => {
  return (
    <fieldset className={styles.fieldset}>
    {fields.length && fields.map((field, ix) => (
      <div key={ix} className={styles.div}>
        <label className={styles.label} htmlFor={`${field}-field`}>{field.replace(/_/gi, ' ')}</label>
        <input
          className={styles.input}
          id={`${field}-field`}
          name={field}
          type='checkbox'
          onChange={event => {
            onChangeHandler({
              field: event.target.name,
              checked: event.target.checked
            })
          }}
        />
      </div>
    ))}
    </fieldset>
  )
}

export default FieldsSelector

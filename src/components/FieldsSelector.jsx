import React from 'react'

const FieldsSelector = ({ fields, onChangeHandler }) => {
  return (
    fields.length &&
    fields.map(field => (
      <>
        <label htmlFor={`${field}-field`}>{field.replace(/_/gi, ' ')}</label>
        <input
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
      </>
    ))
  )
}

export default FieldsSelector

import React, { useEffect } from 'react'

const Select = ({ fields, onChangeHandler }) => {
  useEffect(() => {
    onChangeHandler(fields[0])
  }, [])

  return (
    fields.length && (
      <select
        name='select'
        onChange={event => {
          onChangeHandler(event.target.value)
        }}
      >
        {fields.map(field => (
          <option value={field}>{field.replace(/_/gi, ' ')}</option>
        ))}
      </select>
    )
  )
}

export default Select

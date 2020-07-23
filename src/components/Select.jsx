import React, { useEffect } from 'react'

const Select = ({ fields, onChangeHandler }) => {
  useEffect(() => {
    onChangeHandler(fields[0])
  }, [])

  const handleChange = event => {
    onChangeHandler(event.target.value)
  }

  return (
    fields.length && (
      <select name='select' onChange={handleChange}>
        {fields.map(field => (
          <option value={field}>{field.replace(/_/gi, ' ')}</option>
        ))}
      </select>
    )
  )
}

export default Select

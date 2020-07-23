import React from 'react'
import { filteredStarships } from '../app/slices/starshipsSlice'
import { useSelector } from 'react-redux'

const Table = ({ fields }) => {
  const starships = useSelector(filteredStarships)

  return (
    <table>
      <thead>
        <tr>
          {fields.map(field => (
            <td key={Math.random()}>{field.replace(/_/gi, ' ')}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {starships.length &&
         starships.map(starship => (
           <tr key={Math.random()}>
             {fields.map(field => (
               <td key={Math.random()}>{starship[field]}</td>
             ))}
           </tr>
         ))}
      </tbody>
    </table>
  )
}

export default Table

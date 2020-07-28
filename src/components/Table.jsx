import React from 'react'
import { filteredStarships, selectStarship } from '../app/slices/starshipsSlice'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Table.module.css'

import Spinner from './Spinner'

const Table = ({ fields }) => {
  const starships = useSelector(filteredStarships)
  const dispatch = useDispatch()

  return starships.length ? (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          {fields.map(field => (
            <td className={styles.td} key={Math.random()}>
              {field.replace(/_/gi, ' ')}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {starships.map(starship => (
          <tr
            className={styles.tr}
            onClick={_ => dispatch(selectStarship(starship.url))}
            key={Math.random()}
          >
            {fields.map(field => (
              <td className={styles.td} data-label={field} key={Math.random()}>
                {starship[field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <Spinner />
  )
}

export default Table

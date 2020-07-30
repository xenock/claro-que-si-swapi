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
          {fields.map((field, ix) => (
            <td className={styles.td} key={ix}>
              {field.replace(/_/gi, ' ')}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {starships.map((starship, ix) => (
          <tr
            className={styles.tr}
            onClick={_ => dispatch(selectStarship(starship.url))}
            key={ix}
          >
            {fields.map((field, ix) => (
              <td className={styles.td} data-label={field} key={ix}>
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

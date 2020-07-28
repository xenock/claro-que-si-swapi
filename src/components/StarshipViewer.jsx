import React from 'react'

import {
  selectedStarship,
  deSelectStarship
} from '../app/slices/starshipsSlice'
import { useSelector, useDispatch } from 'react-redux'

import styles from './StarshipViewer.module.css'

import Button from './Button'

const Link = ({ url }) => <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>

const UrlPainter = ({ starship, field }) => {
  return Array.isArray(starship[field]) && starship[field].length ? (
    starship[field].map(additionalField => (
      <>
        <Link url={additionalField} />
        <br />
      </>
    ))
  ) : (
    <Link url={starship[field]} />
  )
}

const StarshipViewer = ({ fields }) => {
  const starship = useSelector(selectedStarship)
  const dispatch = useDispatch()

  const additionalFields = ['pilots', 'films', 'url']

  return (
    <>
      <Button
        onClickHandler={_ => {
          dispatch(deSelectStarship())
        }}
      >
        Back to list
      </Button>
      <table>
        {fields.map(field => (
          <tr key={Math.random()}>
            <td className={styles.td}>{field.replace(/_/gi, ' ')}</td>
            <td className={styles.td}>{starship[field]}</td>
          </tr>
        ))}
        {additionalFields.map(field => (
          <tr key={Math.random()}>
            <td className={styles.td}>{field.replace(/_/gi, ' ')}</td>
            <td className={styles.td}>
              <UrlPainter starship={starship} field={field} />
            </td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default StarshipViewer

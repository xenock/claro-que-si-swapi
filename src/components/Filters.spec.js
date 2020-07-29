import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from '../app/store'
import Filters from './Filters'

test('renders Filters component', () => {
  const fields = [
    'name'
  ]
  const { getByText, getByPlaceholderText, container } = render(
    <Provider store={store}>
      <Filters fields={fields}/>
    </Provider>
  )

  expect(getByText(/Filters/i)).toBeInTheDocument()
  expect(getByPlaceholderText(/Select one field at least/i)).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

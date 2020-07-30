import reducer, {
  searchByTerm,
  setOrderFieldName,
  toggleOrder
} from './starshipsSlice'

import {
  initialState,
  initialLoad,
  fields
} from '../../../fixtures/starshipsSlice.fixtures.js'

describe('starships slice', () => {
  describe('reducer, actions, and selectors', () => {
    it('should return initial state on first run', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should toggle order', () => {
      expect(reducer(initialState, toggleOrder())).toEqual({
        ...initialState,
        ascendingOrder: false
      })
    })

    it('should set orderFieldName given a field name', () => {
      expect(reducer(initialState, setOrderFieldName('name'))).toEqual({
        ...initialState,
        orderFieldName: 'name'
      })
    })

    it('should return filter starships by given term', () => {
      expect(
        reducer(
          {
            ...initialLoad.starships,
            orderFieldName: 'name',
            fields
          },
          searchByTerm('Death Star')
        )
      ).toEqual({
        ...initialLoad.starships,
        filteredStarships: [
          {
            name: 'Death Star',
            model: 'DS-1 Orbital Battle Station',
            manufacturer:
              'Imperial Department of Military Research, Sienar Fleet Systems',
            cost_in_credits: '1000000000000',
            length: '120000',
            max_atmosphering_speed: 'n/a',
            crew: '342,953',
            passengers: '843,342',
            cargo_capacity: '1000000000000',
            consumables: '3 years',
            hyperdrive_rating: '4.0',
            MGLT: '10',
            starship_class: 'Deep Space Mobile Battlestation',
            pilots: [],
            films: ['http://swapi.dev/api/films/1/'],
            created: '2014-12-10T16:36:50.509000Z',
            edited: '2014-12-20T21:26:24.783000Z',
            url: 'http://swapi.dev/api/starships/9/'
          }
        ],
        orderFieldName: 'name',
        fields
      })
    })
  })
})

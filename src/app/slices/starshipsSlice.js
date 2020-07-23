import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://swapi.dev/api/starships'

export const getStarshipsAPI = createAsyncThunk(
  'starships/getStarshipsAPI',
  async () => {
    const response = await fetch(url)
    const json = await response.json()
    return json.results
  }
)
const fields = [
  'name',
  'model',
  'manufacturer',
  'cost_in_credits',
  'length',
  'max_atmosphering_speed',
  'crew',
  'passengers',
  'cargo',
  'consumables',
  'hyperdrive_rating',
  'MGLT',
  'starship_class'
]

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: {
    rawStarships: [],
    filteredStarships: [],
    ascendingOrder: true,
    orderFieldName: ''
  },
  reducers: {
    sortBy: state => {
      return {
        ...state,
        filteredStarships: [...state.rawStarships].sort((a, b) => {
          return state.ascendingOrder
            ? a[state.orderFieldName] > b[state.orderFieldName]
            : a[state.orderFieldName] < b[state.orderFieldName]
        })
      }
    },
    toggleOrder: state => {
      return {
        ...state,
        ascendingOrder: !state.ascendingOrder
      }
    },
    setOrderFieldName: (state, { payload }) => {
      return {
        ...state,
        orderFieldName: payload
      }
    },
    searchByTerm: (state, { payload }) => {
      const result = fields.reduce(
        (acc, filter) => [
          ...acc,
          ...state.rawStarships.filter(
            object => object[filter] && object[filter].includes(payload)
          )
        ],
        []
      )

      return {
        ...state,
        filteredStarships: [...new Set(result)]
      }
    }
  },
  extraReducers: {
    [getStarshipsAPI.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        filteredStarships: payload,
        rawStarships: payload
      }
    }
  }
})

export const {
  sortBy,
  toggleOrder,
  setOrderFieldName,
  searchByTerm
} = starshipsSlice.actions

export const filteredStarships = state => state.starships.filteredStarships
export const rawStarships = state => state.starships.rawStarships
export const ascendingOrder = state => state.starships.ascendingOrder

export default starshipsSlice.reducer

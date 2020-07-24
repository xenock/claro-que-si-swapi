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

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: {
    rawStarships: [],
    filteredStarships: [],
    ascendingOrder: true,
    orderFieldName: '',
    fields: []
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
      const result = state.fields.reduce(
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
    },
    syncSelectedFields: (state, { payload: { field, checked } }) => {
      return {
        ...state,
        fields: checked
          ? [...new Set([...state.fields, field])]
          : state.fields.filter(campo => field !== campo)
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
  searchByTerm,
  setOrderFieldName,
  sortBy,
  syncSelectedFields,
  toggleOrder
} = starshipsSlice.actions

export const filteredStarships = state => state.starships.filteredStarships
export const rawStarships = state => state.starships.rawStarships
export const ascendingOrder = state => state.starships.ascendingOrder
export const emptySearchFields = state => state.starships.fields.length === 0

export default starshipsSlice.reducer

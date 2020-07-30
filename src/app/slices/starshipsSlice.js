import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'https://swapi.dev/api/starships'
const requestConfig = {
  method: 'GET',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default'
}

export const getStarshipsAPI = createAsyncThunk(
  'starships/getStarshipsAPI',
  async () => {
    const response = await fetch(url, requestConfig)
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
    fields: [],
    selectedStarship: null
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
    },
    selectStarship: (state, { payload: starshipUrl }) => {
      return {
        ...state,
        selectedStarship: state.rawStarships.find(
          starship => starship.url === starshipUrl
        )
      }
    },
    deSelectStarship: state => {
      return {
        ...state,
        selectedStarship: null
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
  toggleOrder,
  selectStarship,
  deSelectStarship
} = starshipsSlice.actions

export const filteredStarships = state => state.starships.filteredStarships
export const rawStarships = state => state.starships.rawStarships
export const ascendingOrder = state => state.starships.ascendingOrder
export const emptySearchFields = state => state.starships.fields.length === 0
export const selectedStarship = state => state.starships.selectedStarship

export default starshipsSlice.reducer

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
    filteredStarships: []
  },
  reducers: {},
  extraReducers: {
    [getStarshipsAPI.fulfilled]: (state, action) => {
      return {
        ...state,
        rawStarships: action.payload
      }
    }
  }
})

export const filteredStarships = state => state.starships.filteredStarships
export const rawStarships = state => state.starships.rawStarships

export default starshipsSlice.reducer

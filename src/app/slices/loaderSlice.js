import { createSlice } from '@reduxjs/toolkit'

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    value: true
  },
  reducers: {
    setLoading: state => ({ value: true }),
    setUnloading: state => ({ value: false }),
    toggleLoading: state => ({ value: !state.value })
  }
})

export const { setLoading, setUnloading, toggleLoading } = loaderSlice.actions

export const loading = state => state.loader.value

export default loaderSlice.reducer

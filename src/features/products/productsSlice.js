import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import api, { STATUS } from "../../api";

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
  status: 'idle',
  error: null
})

export const fetchProducts = createAsyncThunk('fetch/products', async () => {
  return (await api.get('/products')).data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = STATUS.COMPLETED
      productsAdapter.addMany(state, action.payload)
    }).addCase(fetchProducts.pending, state => {
      state.status = STATUS.LOADING
    }).addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUS.ERROR
      state.error = action.payload
    })
  }
})

export default productsSlice.reducer
const selfState = state => state.products
export const { selectAll: getAllProducts } = productsAdapter.getSelectors(selfState)
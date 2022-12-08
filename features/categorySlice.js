import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://dailyresearchplot.com/wp-json/wp/v2/categories'

const initialState = {
    status: 'idle',
    error: null,
    categoryById: []
}


// get category by id
export const getCategoryById = createAsyncThunk('category/getCategoryById', async (id) => {
    try {
        const res = await axios.get(`${url}/${id}/`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

const authorSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getCategoryById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getCategoryById.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.categoryById = action.payload
            })
            .addCase(getCategoryById.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default authorSlice.reducer
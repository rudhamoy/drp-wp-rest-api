import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://dailyresearchplot.com/wp-json/wp/v2/users'

const initialState = {
    status: 'idle',
    error: null,
    users: [],
    userById: []
}

// fetch user list
export const getUsersList = createAsyncThunk('author/getUsersList', async (_, thunkAPI) => {
    try {
        const res = await axios.get(`url`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// get author by id
export const getAuthorById = createAsyncThunk('auhtor/getAuthorById', async (id) => {
    try {
        const res = await axios.get(`${url}/${id}/`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

const authorSlice = createSlice({
    name: 'author',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getUsersList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getUsersList.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.users = action.payload
            })
            .addCase(getUsersList.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getAuthorById.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAuthorById.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.authorById = action.payload
            })
            .addCase(getAuthorById.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default authorSlice.reducer
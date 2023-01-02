import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://backend.tollywoodlife.com/wp-json/wp/v2/users'
const moreStoriesUrl = "https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed"

const initialState = {
    status: 'idle',
    error: null,
    users: [],
    userById: [],
    postsByAuthor: []
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

// fetch more post by Category
export const getMorePostsByAuthor = createAsyncThunk('author/getMorePostsByAuthor', async (loadMoreData) => {
    const { userId, pageNum } = loadMoreData
    try {
        const res = await axios.get(`${moreStoriesUrl}&users=${userId}&page=${pageNum}&per_page=5`)
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
            .addCase(getMorePostsByAuthor.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMorePostsByAuthor.fulfilled, (state, action) => {
                const postsList = state.postsByAuthor
                state.status = 'succeeded',
                state.postsByAuthor = [...postsList, ...action.payload]
            })
            .addCase(getMorePostsByAuthor.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default authorSlice.reducer
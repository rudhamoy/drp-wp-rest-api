import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5'

const initialState = {
    status: 'idle',
    error: null,
    posts: [],
}

// fetch user list
export const getMorePosts = createAsyncThunk('posts/getMorePosts', async (page) => {
    try {
        const res = await axios.get(`${url}&page=${page}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getMorePosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMorePosts.fulfilled, (state, action) => {
                const postsList = state.posts
                state.status = 'succeeded',
                // state.posts.push(...action.payload)
                state.posts = [...postsList, ...action.payload]
            })
            .addCase(getMorePosts.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default postSlice.reducer
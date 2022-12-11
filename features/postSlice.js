import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5'

const initialState = {
    status: 'idle',
    error: null,
    pageNum: null ,
    posts: []
}


// get posts
export const getPosts = createAsyncThunk('posts/getPosts', async (page) => {
    try {
        const res = await axios.get(`${url}&page=${parseInt(page)}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePageNum: (state, action) => {
            state.pageNum = action.payload
        },
    },
    extraReducers(builder){
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.posts.push(action.payload)
            })
            .addCase(getPosts.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { updatePageNum  } = postSlice.actions

export default postSlice.reducer
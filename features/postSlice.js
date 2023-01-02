import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed'

const moreStoriesUrl = "https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed"

const initialState = {
    status: 'idle',
    error: null,
    posts: [],
    postsByCat: [],
    stories: []
}

// fetch more post
export const getMorePosts = createAsyncThunk('posts/getMorePosts', async (page) => {
    try {
        const res = await axios.get(`${moreStoriesUrl}&page=${page}&per_page=5`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})


// fetch post by category
export const getPostByCategory = createAsyncThunk('posts/getPostByCategory', async (id) => {
    try {
        const res = await axios.get(`${url}&categories=${id}&per_page=6`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

// fetch stories
export const getStories = createAsyncThunk('posts/getStories', async () => {
    try {
        const res = await axios.get(`/api/stories`)
        // const res = await axios.get(`https://9ux3yz.deta.dev/story`)
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
                state.posts = [...postsList, ...action.payload]
            })
            .addCase(getMorePosts.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
            .addCase(getPostByCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getPostByCategory.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.postsByCat = action.payload
            })
            .addCase(getPostByCategory.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(getStories.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getStories.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.stories = action.payload
            })
            .addCase(getStories.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default postSlice.reducer
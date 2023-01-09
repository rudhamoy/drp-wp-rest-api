import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const url = 'https://backend.tollywoodlife.com/wp-json/wp/v2/categories'
const moreStoriesUrl = "https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed"

const initialState = {
    status: 'idle',
    error: null,
    categoryById: [],
    postsByCategory: []
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


// fetch more post by Category
export const getMorePostsByCategory = createAsyncThunk('category/getMorePostsByCategory', async (loadMoreData) => {
    const { catId, pageNum } = loadMoreData
    try {
        const res = await axios.get(`${moreStoriesUrl}&categories=${catId}&page=${pageNum}&per_page=5`)
        return res.data
    } catch (error) {
        console.log(error)
    }
})

const categorySlice = createSlice({
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
            .addCase(getMorePostsByCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMorePostsByCategory.fulfilled, (state, action) => {
                const postsList = state.postsByCategory
                state.status = 'succeeded',
                state.postsByCategory = [...postsList, ...action.payload]
            })
            .addCase(getMorePostsByCategory.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default categorySlice.reducer
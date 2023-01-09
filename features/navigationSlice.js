import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ALL_HEADER_MENU } from '../components/utils/api';
import fetcher from '../components/utils/fetcher'

const WP_API = 'https://backend.tollywoodlife.com/graphql'

const initialState = {
    status: 'idle',
    error: null,
    menuLists: [],
}


// get menu list
export const getMenuList = createAsyncThunk('menu/getMenuList', async (_, thunkAPI) => {
    try{
    const res = await fetcher(ALL_HEADER_MENU)
    return res.data.menuItems.nodes
  } catch (error) {
    console.log(error)
  }
})


const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(getMenuList.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getMenuList.fulfilled, (state, action) => {
                state.status = 'succeeded',
                state.menuLists = action.payload
            })
            .addCase(getMenuList.rejected, (state) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default menuSlice.reducer
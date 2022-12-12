import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import authorSlice from "../features/authorSlice";
import categorySlice from "../features/categorySlice";

const combineReducer = combineReducers({
    author: authorSlice,
    category: categorySlice,
})

const masterReducer = (state, action) => {
    if(action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        return nextState
    } else {
       return combineReducer(state, action)
    }
}

export const makeStore = () => configureStore({
    reducer: masterReducer
})

export const wrapper = createWrapper(makeStore, {debug: true})
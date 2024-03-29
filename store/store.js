import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import activitySlice from "../features/activitySlice";

import authorSlice from "../features/authorSlice";
import categorySlice from "../features/categorySlice";
import postSlice from "../features/postSlice";
import menuSlice from "../features/navigationSlice";

const combineReducer = combineReducers({
    author: authorSlice,
    category: categorySlice,
    posts: postSlice,
    activity: activitySlice,
    menu: menuSlice
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

export const wrapper = createWrapper(makeStore)
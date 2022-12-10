import { configureStore } from "@reduxjs/toolkit";

import authorSlice from "../features/authorSlice";
import categorySlice from "../features/categorySlice";
import postSlice from "../features/postSlice";

export const store = configureStore({
    reducer: {
        author: authorSlice,
        category: categorySlice,
        posts: postSlice
    }
})
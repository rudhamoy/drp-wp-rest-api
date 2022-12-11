import { configureStore } from "@reduxjs/toolkit";

import authorSlice from "../features/authorSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
    reducer: {
        author: authorSlice,
        category: categorySlice,
    }
})
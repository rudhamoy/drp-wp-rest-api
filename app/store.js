import { configureStore } from "@reduxjs/toolkit";

import authorSlice from "../features/authorSlice";

export const store = configureStore({
    reducer: {
        author: authorSlice
    }
})
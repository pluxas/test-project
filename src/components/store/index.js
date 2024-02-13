import { configureStore } from "@reduxjs/toolkit";
import theme from "../Slice";


const store = configureStore({
    reducer: {
        themes: theme
    },
    devTools: true
})

export default store;
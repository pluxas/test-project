import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light'
}

const theme = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const {changeTheme} = theme.actions;
export default theme.reducer
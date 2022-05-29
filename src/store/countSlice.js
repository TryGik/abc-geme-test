import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        win: 1,
        lose: 1
    },
    reducers: {
        increment: (state, data) => {
            state[data.payload] = state[data.payload] + 1
        },
    }
});

export const { increment } = countSlice.actions;
export const selectCountWin = state => state.count.win;
export const selectCountLose = state => state.count.lose;
export default countSlice.reducer;
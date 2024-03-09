import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    watchListMovies : []
}
export const watchListSlice = createSlice({
    name: "watchList",
    initialState,
    reducers: {
        addToWatchList: (state, action) => {
            state.watchListMovies.push(action.payload)
        }
    }
})

export const {addToWatchList} = watchListSlice.actions;

export default watchListSlice.reducer
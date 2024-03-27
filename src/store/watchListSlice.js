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
        },
        removeFromWatchList: (state, action) => {
            state.watchListMovies = state.watchListMovies.filter((movie) => movie.id !== action.payload.id)
        }
    }
})

export const {addToWatchList, removeFromWatchList} = watchListSlice.actions;

export default watchListSlice.reducer
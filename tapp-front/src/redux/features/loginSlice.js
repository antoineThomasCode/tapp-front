import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isConnected : false,
        role : "",
        token : ""
    },
    reducers : {
        startSession : (state, action) => {
            state.isConnected = true 
            state.token = action.payload.token
            state.role = action.payload.role
        },
        stopSession : (state) => {
            state.isConnected = false
            state.token = ""
            state.role = ""
        },
        

    }
})
export const {startSession, stopSession } = loginSlice.actions
export default loginSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../redux/features/loginSlice"
import userProfile from "../redux/features/userProfile"

export const store = configureStore({
    reducer: {
        login: loginReducer,
        userProfile: userProfile
    }
})
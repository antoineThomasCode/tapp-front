import { createSlice } from "@reduxjs/toolkit"

export const userProfileSlice = createSlice({
    name: "userProfile",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: "",
        id: ""
    },
    reducers : {
        getUserInfos : (state, action) => {
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.createdAt = action.payload.createdAt
            state.updatedAt = action.payload.updatedAt
            state.id = action.payload.id
        },
        cleanUserProfile : (state) => {
            state.email = ""
            state.firstName = ""
            state.lastName = ""
            state.createdAt = ""
            state.updatedAt = ""
            state.id = ""
        }

    }
})
export const {getUserInfos, cleanUserProfile } = userProfileSlice.actions
export default userProfileSlice.reducer 
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// constXd = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     }
// )

const initialState = {
    token: null,
    currUser: null,
    isAuth: null,
}

export const authorizationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser: (state) => {
            state.value += 1
        },
        getCurUserByToken: (state) => {
            state.value -= 1
        },
        getAuthToken: (state) => {
            state.value -= 1
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchUserById.fulfilled, (state, action) => {
    //         state.entities.push(action.payload)
    //     })
    // builder.addCase(fetchUserById.pending, (state, action) => {
    //     // Add user to the state array
    //     state.isLoading.push(action.payload)
    // }),
    // },
})

export const {createUser, getCurUserByToken, getAuthToken} = authorizationSlice.actions

export default authorizationSlice.reducer
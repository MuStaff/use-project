import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',
//     async (userId, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     }
// )

const initialState = {
    value: 0,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getOnePost: (state) => {
            state.value += 1
        },
        getAllPosts: (state) => {
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

export const {getOnePost, getAllPosts} = postsSlice.actions

export default postsSlice.reducer
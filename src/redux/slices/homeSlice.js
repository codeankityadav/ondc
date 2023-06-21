import { createSlice, current } from '@reduxjs/toolkit'
const loginSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            // console.log('action', action) // action : {type: 'login/setIsLoggedIn', payload: true}
            // console.log('current(state)', current(state)) // current state tree
            state.loading = action.payload
        }
    }
})
const loginReducer = loginSlice.reducer;
export const { setLoading } = loginSlice.actions
export default loginReducer;
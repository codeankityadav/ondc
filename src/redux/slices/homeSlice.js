import { createSlice, current } from '@reduxjs/toolkit'
const loginSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
        food: [],
        restaurant: [],
        searchKeyword: "",
        cart: []
    },
    reducers: {
        setLoading: (state, action) => {
            // console.log('action', action) // action : {type: 'login/setIsLoggedIn', payload: true}
            // console.log('current(state)', current(state)) // current state tree
            state.loading = action.payload
        },
        setFood: (state, action) => {
            state.food = action.payload
        },
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload
        },
        setCart: (state, action) => {
            state.cart.push(action.payload)
        },
        setRemoveCartById: (state, action) => {
            let prevCart = JSON.parse(JSON.stringify(current(state).cart))
            const index = prevCart.findIndex((obj) => obj.id == action.payload.id)
            if (index != -1) {
                prevCart.splice(index, 1)
            }
            state.cart = prevCart
        },


    }
})
const loginReducer = loginSlice.reducer;
export const { setLoading, setFood, setSearchKeyword, setRestaurant, setCart, setRemoveCartById } = loginSlice.actions
export default loginReducer;
import { createSlice, current } from '@reduxjs/toolkit'
const homeSlice = createSlice({
    name: 'home',
    initialState: {
        loading: false,
        food: [],
        restaurant: [],
        searchKeyword: "",
        cart: [],
        address: [],
        profile: {
            name : "",
            email : "",
            phone : ""
        }
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
        setAddress: (state, action) => {
            state.address.push(action.payload);
        },
        removeAddress: (state, action) => {
            let prevAdrr = JSON.parse(JSON.stringify(current(state).address))
            const data = prevAdrr.filter((d) => d.id !== action.payload)
            state.address = data
        },
        setPrimaryAddress: (state, action) => {
            let prevAdrr = JSON.parse(JSON.stringify(current(state).address))

            for (let i = 0; i < prevAdrr.length; i++) {
                prevAdrr[i].isPrimary = false
            }
            for (let i = 0; i < prevAdrr.length; i++) {
                const element = prevAdrr[i];
                if (i == action.payload) {
                    prevAdrr[action.payload].isPrimary = true
                }
            }
            state.address = prevAdrr
        },
        setRemoveCartById: (state, action) => {
            let prevCart = JSON.parse(JSON.stringify(current(state).cart))
            const index = prevCart.findIndex((obj) => obj.id == action.payload.id)
            if (index != -1) {
                prevCart.splice(index, 1)
            }
            state.cart = prevCart
        },
        resetAddress: (state, action) => {
            state.address = []
        },
        setProfile: (state, action) => {
            state.profile = action.payload
        },

    }
})
const loginReducer = homeSlice.reducer;
export const {
    setLoading,
    setFood,
    setSearchKeyword,
    setRestaurant,
    setCart,
    setRemoveCartById,
    setAddress,
    setPrimaryAddress,
    resetAddress,
    removeAddress,
    setProfile
} = homeSlice.actions
export default loginReducer;
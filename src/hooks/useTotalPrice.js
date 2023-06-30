import React from 'react'
import { useSelector } from 'react-redux'

const useTotalPrice = (initialValue) => { 
    const { cart } = useSelector(state => state.home)
    const [totalPrice, setTotalPrice] = React.useState(initialValue)

    const calculateTotal = () => {
        let total = 0;
        cart.map((d, i) => {
            total = d.price + total;
        })
        return total;
    }


    React.useEffect(() => {
        setTotalPrice(calculateTotal())
    }, [cart.length])
 

    return { totalPrice }
}

export default useTotalPrice

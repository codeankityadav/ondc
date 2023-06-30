import { Image, TouchableOpacity, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { rh, rw } from '../utils/Dimension'
import { COLORS, FONT_FAMILY } from '../utils/constants'
import { gStyles } from '../Style'
import ButtonCmp from './button/ButtonCmp'
import { useDispatch, useSelector } from 'react-redux'
import { setCart, setRemoveCartById } from '../redux/slices/homeSlice'

const FoodBoxCmp = (props) => {
  const { item, setIsVisible = () => { } } = props
  const { cart } = useSelector(state => state.home)
  const [isInCart, setIsInCart] = useState()
  const dispatch = useDispatch()

  const onAddToCart = (singleItem) => {
    const index = cart.findIndex(food => food.id == singleItem.id)
    if (index == -1) {
      dispatch(setCart({ ...singleItem, count: 1 }));
    }
  }


  const onCancelToCart = (singleItem) => {
    dispatch(setRemoveCartById({ id: singleItem.id }))
  }

  useEffect(() => {
    const index = cart.findIndex(food => food.id == item.id)
    if (index >= 0) {
      setIsInCart(false)
    } else {
      setIsInCart(true)
    }

  }, [cart])
  return (
    <TouchableOpacity
      // onPress={() => setIsVisible(true)}s
      className="flex-row" style={{
        paddingVertical: rh(1.4),
        borderBottomWidth: rw(0.2),
        borderBottomColor: COLORS.GREY2,
        borderStyle: 'dashed'
      }}>
      <Image
        source={{ uri: item.imgSrc }}
        resizeMethod='auto'
        style={{
          height: rh(15),
          width: rw(30),
          borderRadius: rw(5),
        }} />
      <View
        className="flex-col justify-between items-center"
        style={{
          flex: 1,
          paddingVertical: rw(2),
          paddingHorizontal: rw(5),
        }}>
        <View style={{ alignSelf: 'flex-start' }}>
          <Text style={[gStyles.titleText, { textTransform: 'capitalize' }]}>{item.title}</Text>
          <Text style={[gStyles.titleText, { fontFamily: FONT_FAMILY.OUTFIT.REGULAR }]}>₹ {item.price}</Text>
        </View>
        {isInCart ?
          <ButtonCmp title="ADD" onPress={() => onAddToCart(item)} style={{ paddingHorizontal: rw(5), alignSelf: 'flex-end', paddingVertical: rw(2), backgroundColor: COLORS.GREEN }} />
          : <ButtonCmp title="CANCEL" onPress={() => onCancelToCart(item)} style={{ paddingHorizontal: rw(5), alignSelf: 'flex-end', paddingVertical: rw(2) }} />
        }
      </View>
    </TouchableOpacity>
  )
}

export default FoodBoxCmp

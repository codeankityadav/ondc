import {  Image, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { rh, rw } from '../utils/Dimension'
import { COLORS, ROUTE } from '../utils/constants'
import { gStyles } from '../Style'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setSearchKeyword } from '../redux/slices/homeSlice'

const RestaurantBoxCmp = (props) => {
  const { item } = props;
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(setSearchKeyword(item.title))
        navigation.navigate(ROUTE.FOOD)
      }}
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
          <Text style={[gStyles.titleDescText, { textTransform: 'capitalize' }]}>{item.desc}</Text>
          <Text style={[gStyles.titleDescText, { textTransform: 'capitalize' }]}>{item.location}  {item.distance} km</Text>
          <Text style={[gStyles.titleDescText, { textTransform: 'capitalize' }]}>Rating : {item.rating} </Text>

        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantBoxCmp

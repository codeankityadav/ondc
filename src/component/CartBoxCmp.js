import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native'
import React from 'react' 
import { rh, rw } from '../utils/Dimension'
import { COLORS, FONT_FAMILY } from '../utils/constants'
import { gStyles } from '../Style'
import ButtonCmp from './button/ButtonCmp'

const CartBoxCmp = (props) => {
  const { item } = props
  return (
    <TouchableOpacity className="flex-row" style={{
      paddingVertical: rh(1.4),
      borderBottomWidth: rw(0.2),
      borderBottomColor: COLORS.GREY2,
      borderStyle : 'dashed'
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
        <View style={{alignSelf : 'flex-start'}}>
          <Text style={[gStyles.titleText, { textTransform: 'capitalize' }]}>{item.title}</Text>
          <Text style={[gStyles.titleText, { fontFamily: FONT_FAMILY.OUTFIT.REGULAR }]}>₹ {item.price}</Text>
        </View>
        <ButtonCmp title="ADD" style={{ width: rw(20), alignSelf: 'flex-end', paddingVertical: rw(1) }} />
      </View>
    </TouchableOpacity>
  )
}

export default CartBoxCmp

const styles = StyleSheet.create({})
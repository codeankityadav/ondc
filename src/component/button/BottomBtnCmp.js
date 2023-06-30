import {  Text, View } from 'react-native'
import React from 'react'
import { gStyles } from '../../Style'
import { rw } from '../../utils/Dimension'
import ButtonCmp from './ButtonCmp'
import { COLORS, FONT_FAMILY } from '../../utils/constants'

const BottomBtnCmp = (props) => {
    const { onPress = () => { }, title, totalPrice } = props
    return (
        <View
            className="flex-row justify-between items-center"
            style={{ backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingVertical: rw(4), elevation: 10 }}>
            <View>
                <Text style={[gStyles.titleText, { color: COLORS.GREEN, fontFamily: FONT_FAMILY.OUTFIT.BOLD }]}>₹ {totalPrice}</Text>
                <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.BLACK }]}>₹ You saved {totalPrice - 50}</Text>
            </View>
            <ButtonCmp title={title} onPress={onPress} style={{ minWidth: rw(40), marginTop: rw(0) }} />
        </View>
    )
}

export default BottomBtnCmp

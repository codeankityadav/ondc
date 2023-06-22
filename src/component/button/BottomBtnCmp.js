import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gStyles } from '../../Style'
import { rw } from '../../utils/Dimension'
import ButtonCmp from './ButtonCmp'
import { COLORS } from '../../utils/constants'

const BottomBtnCmp = (props) => {
    const { onPress = () => { }, title } = props
    return (
        <View
            className="flex-row justify-between items-center"
            style={{ backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingVertical: rw(4), elevation: 10 }}>
            <View>
                <Text style={gStyles.titleDescText}>₹ 2777</Text>
                <Text style={gStyles.titleDescText}>₹ you saved 541</Text>
            </View>
            <ButtonCmp title={title} onPress={onPress} style={{ minWidth: rw(40), marginTop: rw(0) }} />
        </View>
    )
}

export default BottomBtnCmp

const styles = StyleSheet.create({})
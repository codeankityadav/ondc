import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, rw } from '../../utils/constants'
import ButtonCmp from './ButtonCmp'

const BottomFullBtnCmp = (props) => {
    const { title = "proceed" } = props
    return (
        <View
            className="flex-row justify-center items-center"
            style={{ backgroundColor: COLORS.WHITE, paddingHorizontal: rw(7), paddingVertical: rw(4), elevation: 10 }}>
            <ButtonCmp title={title} style={{ minWidth: rw(70), marginTop: rw(0) }} />
        </View>
    )
}

export default BottomFullBtnCmp

const styles = StyleSheet.create({})
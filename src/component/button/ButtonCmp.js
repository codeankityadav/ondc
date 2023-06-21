import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { rw } from '../../utils/Dimension'
import { COLORS, ROUTE } from '../../utils/constants'
import { gStyles } from '../../Style'

const ButtonCmp = (props) => {
    const { onPress = () => { } } = props
    return (
        <TouchableOpacity
            className="flex-row justify-center items-center"
            style={{
                minWidth: rw(50),
                backgroundColor: COLORS.RED,
                borderRadius: rw(10),
                paddingVertical: rw(5)
            }}
            onPress={onPress}
        >
            <Text style={[gStyles.titleText, { color: COLORS.WHITE }]}>Go to {props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCmp

const styles = StyleSheet.create({})
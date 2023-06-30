import {  View } from 'react-native'
import React from 'react'
import { rw } from '../../utils/Dimension'

const CenterCmp = (props) => {
    const {
        flexDirection = 'row',
        paddingHorizontal = rw(7),
        marginHorizontal = rw(0),
        style = {}
    } = props

    return (
        <View
            className={`flex-${flexDirection} justify-center items-centers`}
            style={[{ paddingHorizontal }, style]}
        >
            {props.children}
        </View>
    )
}

export default CenterCmp

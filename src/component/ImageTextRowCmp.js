import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'
import { useNavigation } from '@react-navigation/native'

const ImageTextRowCmp = (props) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity
            className="flex-row items-center"
            style={{
                borderBottomColor: COLORS.GREY2,
                borderBottomWidth: rw(0.1),
                paddingVertical: rw(8)
            }}
            onPress={() => navigation.navigate(props.navigateTo)}>
            {props.icon}
            <Text style={[gStyles.titleText, { marginLeft: rw(5) }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ImageTextRowCmp

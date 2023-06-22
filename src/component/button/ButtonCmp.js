import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react' 
import { gStyles } from '../../Style'
import { rh, rw } from '../../utils/Dimension'
import { COLORS } from '../../utils/constants'

const ButtonCmp = (props) => {
    const {
        style = styles.btn,
        titleStyle = {},
        title = "Proceed",
        onPress = () => { }
    } = props
    return (
        <TouchableOpacity
            onPress={() => onPress(props.item)}
            className='justify-center items-center flex-row'
            style={[styles.btn, style]}
        >
            <Text style={[gStyles.btnText, titleStyle]}>{props.title}</Text>
            {props.children}
        </TouchableOpacity>
    )
}

export default ButtonCmp

const styles = StyleSheet.create({
    btn: {
        marginTop: rw(5),
        marginBottom: 0,
        backgroundColor: COLORS.RED,
        paddingVertical: rh(1.5),
        color: COLORS.WHITE,
        elevation: 5,
        marginVertical: 0,
        borderRadius: 10
    }
})
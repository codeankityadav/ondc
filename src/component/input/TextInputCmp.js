import { StyleSheet,  TextInput,  } from 'react-native'
import React from 'react'
import { COLORS, FONT_SIZE, rh, rw } from '../../utils/constants'

const TextInputCmp = (props) => {
    const {
        style = styles.textInput,
        title = "Proceed",
        keyboardType = 'default',
        // onChangeText = () => { },
        ...restProps
    } = props
    return (
        <TextInput
            onPress={() => onPress(props.item)}
            className='justify-center items-center flex-row'
            style={[styles.textInput, style]}
            keyboardType={keyboardType}
            placeholderTextColor={COLORS.GREY}
            // onChangeText={onChangeText}
            {...restProps}
            cursorColor={COLORS.GREY}
        />

    )
}

export default TextInputCmp

const styles = StyleSheet.create({
    textInput: {
        marginTop: rw(5),
        marginBottom: 0,
        backgroundColor: COLORS.WHITE,
        maxWidth: rw(100),
        paddingVertical: rh(1.2),
        paddingHorizontal: rw(3),
        color: COLORS.GREY,
        elevation: 0,
        marginVertical: 0,
        borderRadius: 10,
        borderColor: COLORS.RED,
        borderWidth: rw(0.2),
        color: COLORS.GREY2,
        fontSize: FONT_SIZE.LOGO_DESC,
    }
})
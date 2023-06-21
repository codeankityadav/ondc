import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react' 
import { COLORS } from '../../utils/constants'
import { gStyles } from '../../Style'

const Wrapper = (props) => {
    const {
        children,
        backgroundColor = COLORS.GREY3,
        styles = gStyles.container,
        barStyle='dark-content'
    } = props
    return (
        <>
            <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
            <View style={styles}>
                {children}
            </View>
        </>
    )
}

export default Wrapper

const styles = StyleSheet.create({

})
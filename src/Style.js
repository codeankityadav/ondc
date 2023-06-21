import { StyleSheet } from 'react-native'
import { COLORS, FONT_FAMILY, FONT_SIZE } from './utils/constants'

const gStyles = StyleSheet.create({

    // C0NTAINERS
    container: {
        flex: 1,
        backgroundColor: COLORS.GREY3
    },
    containerCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.GREY3
    },

    // TEXT 

    titleText: {
        fontSize: FONT_SIZE.h3,
        fontFamily: FONT_FAMILY.OUTFIT.SEMIBOLD,
        color: COLORS.BLACK
    },
    titleDescText: {
        fontSize: FONT_SIZE.h4,
        fontFamily: FONT_FAMILY.OUTFIT.REGULAR,
        color: COLORS.GREY
    },
    btnText: {
        fontSize: FONT_SIZE.h4,
        fontFamily: FONT_FAMILY.OUTFIT.SEMIBOLD,
        color: COLORS.WHITE
    },
    text_h5: {
        fontSize: FONT_SIZE.h5,
        fontFamily: FONT_FAMILY.OUTFIT.REGULAR,
        color: COLORS.BLACK
    },
    text_h3: {
        fontSize: FONT_SIZE.h2,
        fontFamily: FONT_FAMILY.OUTFIT.SEMIBOLD,
        color: COLORS.BLACK
    }
})


export { gStyles }
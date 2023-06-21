import { rf } from "../Dimension";

let FONT_SIZE = {
    LOGO : rf(13),
    LOGO_DESC : rf(2.7), 
    h1: rf(4.3),
    h2: rf(3.26),
    h3: rf(2.57),
    h4: rf(2.15),
    h5: rf(1.78),
    h6: rf(1.44),
}

let FONT_FAMILY = {
    OUTFIT: {  
        EXTRABOLD: 'Outfit-ExtraBold',
        BOLD: 'Outfit-Bold',
        SEMIBOLD: 'Outfit-SemiBold',
        MEDIUM: 'Outfit-Medium',
        THIN: 'Outfit-Thin',
        REGULAR: 'Outfit-Regular',
        BLACK: 'Outfit-Black',
        EXTRALIGHT: 'Outfit-ExtraLight',
        LIGHT: 'Outfit-Light',
    },
    POPPINS : {
        EXTRA_BOLD_ITALIC : 'Poppins-ExtraBoldItalic'
    }
}
 

export { FONT_SIZE, FONT_FAMILY }
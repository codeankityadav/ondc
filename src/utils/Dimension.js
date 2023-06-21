import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions"

const rh = (value) => responsiveScreenHeight(value)
const rw = (value) => responsiveScreenWidth(value)
const rf = (value) => responsiveFontSize(value)

export { rh, rw, rf }


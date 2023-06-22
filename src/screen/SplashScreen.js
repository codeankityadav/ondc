import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY, FONT_SIZE, ROUTE, rf, rh, rw } from '../utils/constants'
import { gStyles } from '../Style'
import { LoadingIcon, Wrapper } from '../component'

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTE.LOGIN)
    }, 3000);
    return () => {
      clearTimeout()
    }
  }, [])

  return (
    <Wrapper styles={gStyles.containerCenter} backgroundColor={COLORS.WHITE} barStyle="dark-content">
      <View className="flex-col justify-center items-center" style={{ flex: 1, backgroundColor: COLORS.GREY3 }}>
        <LoadingIcon size={70} />
        <Text style={styles.logoText}>ONDC</Text>
        <Text style={styles.mainSubText}>Online Network Digital Chain</Text>
      </View>
    </Wrapper>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  logoText: {
    fontSize: FONT_SIZE.LOGO,
    color: COLORS.RED,
    fontFamily: FONT_FAMILY.POPPINS.EXTRA_BOLD_ITALIC,
  },
  mainSubText: {
    fontSize: FONT_SIZE.LOGO_DESC,
    color: COLORS.LIGHT_BLUE,
    fontFamily: FONT_FAMILY.OUTFIT.EXTRABOLD,
  },
  // splashBottomTitleText: {
  //     fontSize: FONT_SIZE.LOGO_DESC,
  //     color: COLORS.RED,
  //     fontFamily: FONT_FAMILY.OUTFIT.REGULAR,
  // },
  // splashBottomSubText: {
  //     fontSize: FONT_SIZE.LOGO_DESC,
  //     color: COLORS.LIGHT_BLUE,
  //     fontFamily: FONT_FAMILY.OUTFIT.EXTRABOLD,
  // },
})
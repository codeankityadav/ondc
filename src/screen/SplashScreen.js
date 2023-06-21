import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONT_FAMILY, FONT_SIZE, ROUTE, rf, rh, rw } from '../utils/constants'
import Wrapper from '../component/wrapper/Wrapper'
import LoadingIcon from '../component/loading/LoadingIcon'
import { gStyles } from '../Style'
import ButtonCmp from '../component/button/ButtonCmp'

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      // navigation.replace(ROUTE.LOGIN)
    }, 3000);
    return () => {
      clearTimeout()
    }
  }, [])

  return (
    <Wrapper styles={gStyles.containerCenter}>
      <View className="flex-col justify-center items-center" style={{ flex: 1, backgroundColor: COLORS.GREY3 }}>
        <LoadingIcon size={70} />
        <Text style={styles.logoText}>ONDC</Text>
        <Text style={styles.mainSubText}>Online Network Digital Chain</Text>
        <ButtonCmp onPress={() => navigation.navigate(ROUTE.LOGIN)}  title={ROUTE.LOGIN}/>
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
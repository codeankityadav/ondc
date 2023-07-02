import { Text, View } from 'react-native'
import React from 'react'
import { ButtonCmp, CenterCmp, HeaderCmp, Wrapper } from '../component'
import { gStyles } from '../Style'
import Lottie from 'lottie-react-native';
import { rw } from '../utils/Dimension';
import { COLORS, ROUTE } from '../utils/constants';

const PaymentScreen = ({ navigation }) => {

  return (
    <Wrapper>
      <HeaderCmp isSearch={false} />
      <View style={gStyles.containerCenter}>
        <Lottie source={require('../assets/lottie/delivery.json')} style={{ width: rw(80), height: rw(80) }} duration={5000} autoPlay loop />
        {/* <Text style={[gStyles.titleText, { paddingTop: rw(5), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>We don't have Reach in Your Area  !</Text> */}
        <Text style={[gStyles.titleText, { paddingBottom: rw(10), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>Comming Very Soon in Your City !</Text>
        <Lottie source={require('../assets/lottie/error.json')} style={{ width: rw(20), height: rw(20) }} duration={2000} autoPlay loop />

      </View>
      <CenterCmp style={{ paddingVertical: rw(5) }}>
        <ButtonCmp title="Home" style={{ width: rw(80) }} onPress={() => navigation.navigate(ROUTE.HOME_DRAWER)} />
      </CenterCmp>

    </Wrapper>
  )
}

export default PaymentScreen

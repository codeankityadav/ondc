import {  Text, View } from 'react-native'
import React from 'react'
import { HeaderCmp, Wrapper } from '../component'
import { gStyles } from '../Style'
import Lottie from 'lottie-react-native';
import { rw } from '../utils/Dimension';
import { COLORS } from '../utils/constants';

const PaymentScreen = () => {
  return (
    <Wrapper>
      <HeaderCmp isSearch={false} />
      <View style={gStyles.containerCenter}>
        <Lottie source={require('../assets/lottie/not-available.json')} style={{ width: rw(90), height: rw(90) }} duration={5000} autoPlay loop />
        <Text style={[gStyles.titleText, { paddingTop: rw(5), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>Delivery Not Available in Your City</Text>
      </View>
    </Wrapper>
  )
}

export default PaymentScreen

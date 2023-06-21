import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCmp from '../component/button/ButtonCmp'
import Wrapper from '../component/wrapper/Wrapper'
import { gStyles } from '../Style'
import { COLORS, ROUTE } from '../utils/constants'

const LoginScreen = ({navigation}) => {
  return (
    <Wrapper styles={gStyles.containerCenter} backgroundColor={COLORS.RED} barStyle={'light-content'}>
      <ButtonCmp onPress={() => navigation.navigate(ROUTE.VERIFY_OTP)} title={ROUTE.VERIFY_OTP}/>
    </Wrapper>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
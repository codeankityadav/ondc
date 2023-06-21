import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCmp from '../component/button/ButtonCmp'
import Wrapper from '../component/wrapper/Wrapper'
import { COLORS, ROUTE } from '../utils/constants'
import { gStyles } from '../Style'

const VerifyOTPScreen = ({navigation}) => {
  return (
   
    <Wrapper styles={gStyles.containerCenter} backgroundColor={COLORS.RED} barStyle={'light-content'}>
      <ButtonCmp onPress={() => navigation.navigate(ROUTE.HOME)} title={ROUTE.HOME}/>
    </Wrapper>
  )
}

export default VerifyOTPScreen

const styles = StyleSheet.create({})
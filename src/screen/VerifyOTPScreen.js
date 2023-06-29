import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { gStyles } from '../Style'
import { COLORS, FONT_SIZE, ROUTE, TEXTS, rw } from '../utils/constants'
import { ButtonCmp, CenterCmp, TextInputCmp, Wrapper } from '../component'
import BottomSheetCmp from '../component/BottomSheetCmp'

const VerifyOTPScreen = ({ navigation }) => { 
  return (
    <Wrapper >
      <CenterCmp flexDirection='col' style={{ paddingTop: rw(15) }}>
        <Text style={[gStyles.titleText, { fontSize: FONT_SIZE.h1 }]}>{TEXTS.VERIFY_OTP.VERIFY_PHONE}</Text>
        <Text style={[gStyles.titleDescText, { paddingTop: rw(5) }]}>{TEXTS.VERIFY_OTP.SMS}</Text>
        <View className='flex-row items-center' style={{ paddingTop: rw(2) }}>
          <Text style={[gStyles.titleDescText]}>+91-994371397</Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTEj.LOGIN)}>
            <Text style={[gStyles.titleDescText, { color: COLORS.LIGHT_BLUE, marginLeft: rw(3) }]}>Change</Text>
          </TouchableOpacity>
        </View>
        <TextInputCmp keyboardType='numeric' maxLength={6} />
        <ButtonCmp
          onPress={() => navigation.navigate(ROUTE.HOME_DRAWER)}
          title='Verify' />
        <Text style={[gStyles.titleDescText, { paddingTop: rw(5), color: COLORS.GREEN, textAlign: 'right' }]}>{TEXTS.VERIFY_OTP.WAITING}</Text>
      </CenterCmp>

    </Wrapper>
  )
}

export default VerifyOTPScreen

const styles = StyleSheet.create({})
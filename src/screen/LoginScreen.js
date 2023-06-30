import { Text, View } from 'react-native'
import React from 'react'
import { gStyles } from '../Style'
import { COLORS, FONT_SIZE, ROUTE, TEXTS, rw } from '../utils/constants'
import { ButtonCmp, CenterCmp, TextInputCmp, Wrapper } from '../component'

const LoginScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <CenterCmp flexDirection='col'>
        <CenterCmp className="flex-row justify-end items-center" style={{ paddingTop: rw(10) }}>
          <Text style={[gStyles.titleText, { color: COLORS.RED }]}>Skip</Text>
        </CenterCmp>
        <Text style={[gStyles.titleText, { fontSize: FONT_SIZE.h1 }]}>{TEXTS.LOGIN_TEXT}</Text>
        <TextInputCmp keyboardType='numeric' maxLength={10} />
        <ButtonCmp
          onPress={() => navigation.navigate(ROUTE.VERIFY_OTP)}
          title='Login' />
        <Text style={[gStyles.titleDescText, { paddingTop: rw(5) }]}>{TEXTS.LOGIN_TERM}</Text>
      </CenterCmp>
    </Wrapper >
  )
}

export default LoginScreen

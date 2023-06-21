import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gStyles } from '../Style'
import ButtonCmp from '../component/button/ButtonCmp'
import Wrapper from '../component/wrapper/Wrapper'
import { COLORS, ROUTE } from '../utils/constants'


const HomeScreen = ({navigation}) => { 
  return (
    
    <Wrapper styles={gStyles.containerCenter} backgroundColor={COLORS.RED} barStyle={'light-content'}>
      <ButtonCmp onPress={() => navigation.navigate(ROUTE.FOOD)} title={ROUTE.FOOD}/>
    </Wrapper>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
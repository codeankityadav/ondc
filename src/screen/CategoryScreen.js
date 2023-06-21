import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonCmp from '../component/button/ButtonCmp'
import Wrapper from '../component/wrapper/Wrapper'
import { COLORS, ROUTE } from '../utils/constants'
import { gStyles } from '../Style'

const CategoryScreen = ({navigation}) => {
  return (
   
    <Wrapper styles={gStyles.containerCenter} backgroundColor={COLORS.RED} barStyle={'light-content'}>
      <ButtonCmp onPress={() => navigation.navigate(ROUTE.PROFILE)} title={ROUTE.PROFILE}/>
    </Wrapper>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})
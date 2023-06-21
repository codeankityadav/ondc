import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gStyles } from '../Style'


const HomeScreen = () => { 
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text style={gStyles.bgRed}>SplashScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoadingIcon from './LoadingIcon'
import { rh } from '../../utils/Dimension'

const LoadingCmp = () => {
  return (
    <View style={{
      flex: 1,
      position: 'absolute',
      top: rh(25), 
    }}
    >
      <LoadingIcon />
    </View>
  )
}

export default LoadingCmp

const styles = StyleSheet.create({})
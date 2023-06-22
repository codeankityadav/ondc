import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { COLORS, FOOD, ROUTE, rw } from '../utils/constants'
import { CenterCmp, FoodBoxCmp } from '../component'

const FoodScreen = ({ navigation }) => {
  return (

    <View style={{ backgroundColor: COLORS.WHITE }}>
      <CenterCmp style={{ paddingHorizontal: rw(5) }}>
        <FlatList
          data={FOOD}
          renderItem={({ item }) => <FoodBoxCmp item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: rw(0.2) }}
        />
      </CenterCmp>

    </View>
  )
}

export default FoodScreen

const styles = StyleSheet.create({})
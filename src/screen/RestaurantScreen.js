import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Wrapper from '../component/wrapper/Wrapper'
import { COLORS, RESTAURANT, rw } from '../utils/constants'
import { gStyles } from '../Style'
import { CenterCmp, RestaurantBoxCmp } from '../component'

const RestaurantScreen = ({ navigation }) => {
  return (

    <Wrapper >
      <CenterCmp style={{ paddingHorizontal: rw(5) }}>
        <FlatList
          data={RESTAURANT}
          renderItem={({ item }) => <RestaurantBoxCmp item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: rw(0.2) }}
        />
      </CenterCmp>
    </Wrapper>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})
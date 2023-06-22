import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { COLORS, FOOD, ROUTE, rw } from '../utils/constants'
import { BottomBtnCmp, CartBoxCmp, CenterCmp, FoodBoxCmp, HeaderCmp, Wrapper } from '../component'

const CartScreen = ({ navigation }) => {
  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        <View style={{ backgroundColor: COLORS.WHITE }}>
          <CenterCmp style={{ paddingHorizontal: rw(5) }}>
            <FlatList
              data={FOOD}
              renderItem={({ item }) => <CartBoxCmp item={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ padding: rw(0.2) }}
            />
          </CenterCmp>
        </View>
      </Wrapper>

      <BottomBtnCmp title="Make Payment" onPress={() => navigation.navigate(ROUTE.ORDER_REVIEW)} />
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
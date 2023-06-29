import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { COLORS, FOOD, ROUTE, rw } from '../utils/constants'
import { BottomBtnCmp, CartBoxCmp, CenterCmp, FoodBoxCmp, HeaderCmp, Wrapper } from '../component'
import { useSelector } from 'react-redux'

const OrderReviewScreen = ({ navigation }) => {
  const { cart } = useSelector(state => state.home)

  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        <View style={{ backgroundColor: COLORS.WHITE }}>
          <CenterCmp style={{ paddingHorizontal: rw(5) }}>
            <FlatList
              data={cart}
              renderItem={({ item }) => <FoodBoxCmp item={item} />} 
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ padding: rw(0.2) }}
            />
          </CenterCmp>
        </View>
      </Wrapper>

      <BottomBtnCmp title="Place Order" onPress={() => navigation.navigate(ROUTE.PAYMENT)} />
    </>
  )
}

export default OrderReviewScreen

const styles = StyleSheet.create({})
import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { COLORS, FOOD, ROUTE, rh, rw } from '../utils/constants'
import { BottomBtnCmp, CartBoxCmp, CenterCmp, FoodBoxCmp, HeaderCmp, Wrapper } from '../component'
import { useSelector } from 'react-redux'
import TotalProductCmp from '../component/TotalProductCmp'

const CartScreen = ({ navigation }) => {
  const { cart } = useSelector(state => state.home)

  return (
    <>
      <Wrapper>
        <HeaderCmp isSearch={false} />
        <View style={{ backgroundColor: COLORS.WHITE, paddingTop: rh(2) }}>
          <TotalProductCmp totalProducts={5} totalPice={520} />
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

      <BottomBtnCmp title="Make Payment" onPress={() => navigation.navigate(ROUTE.ORDER_REVIEW)} />
    </>
  )
}

export default CartScreen

const styles = StyleSheet.create({})
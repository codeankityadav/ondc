import { FlatList, View, Text } from 'react-native'
import React from 'react'
import { COLORS, ROUTE, rh, rw } from '../utils/constants'
import { BottomBtnCmp, CenterCmp, FoodBoxCmp, HeaderCmp, Wrapper } from '../component'
import { useSelector } from 'react-redux'
import TotalProductCmp from '../component/TotalProductCmp'
import useTotalPrice from '../hooks/useTotalPrice'
import Lottie from 'lottie-react-native';
import { gStyles } from '../Style'

const CartScreen = ({ navigation }) => {
  const { cart, searchKeyword } = useSelector(state => state.home)
  const { totalPrice } = useTotalPrice(0)


  return (
    <>
      {cart.length > 0 ? <>
        <>
          <Wrapper>
            <HeaderCmp isSearch={false} />
            <View style={{ backgroundColor: COLORS.WHITE, paddingTop: rh(2) }}>
              <TotalProductCmp totalProducts={cart.length} totalPrice={totalPrice} />
              <CenterCmp style={{ paddingHorizontal: rw(5),paddingBottom : rw(50)}}>
                <FlatList
                  data={cart}
                  renderItem={({ item }) => <FoodBoxCmp item={item} />}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{ padding: rw(0.2) }}
                />
              </CenterCmp>

            </View>
          </Wrapper>
          <BottomBtnCmp title="Select Address" totalPrice={totalPrice} onPress={() => navigation.navigate(ROUTE.ADDRESS)} />
        </>
      </> :
        <>

          <Wrapper>
            <HeaderCmp isSearch={false} />
            <View style={gStyles.containerCenter}>
              <Lottie source={require('../assets/lottie/food.json')} style={{ width: rw(90), height: rw(90) }} duration={5000} autoPlay loop />
              <Text style={[gStyles.titleText, { paddingTop: rw(5), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>Your Cart is Empty !</Text>
            </View>
          </Wrapper>
        </>}
    </>
  )
}

export default CartScreen

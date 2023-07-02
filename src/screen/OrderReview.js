import { FlatList, View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, ROUTE, rh, rw } from '../utils/constants'
import { BottomBtnCmp, CenterCmp, FoodBoxCmp, HeaderCmp, Wrapper } from '../component'
import { useSelector } from 'react-redux'
import TotalProductCmp from '../component/TotalProductCmp'
import useTotalPrice from '../hooks/useTotalPrice'
import AddressBoxCmp from '../component/AddressBoxCmp'
import { gStyles } from '../Style'
import PaymentBoxCmp from '../component/PaymentBoxCmp'

const OrderReviewScreen = ({ navigation }) => {
  const { cart, address } = useSelector(state => state.home)
  const { totalPrice } = useTotalPrice(0)

  const [selectedAddress, setSelectedAddress] = React.useState()
  const [isVisible, setIsVisible] = React.useState(false)


  React.useEffect(() => {
    let filteredAddr = address.filter((d) => d.isPrimary)
    if (filteredAddr.length > 0) {
      setSelectedAddress(filteredAddr[0])
    } else if (filteredAddr.length == 0) {
      setSelectedAddress(address[0])
    }
  }, [address])

  onPlaceOrder = () => {
    if (address.length === 1) {
      if (address[0]?.full_address?.length > 0) {
        navigation.navigate(ROUTE.PAYMENT)
      } else {
        alert("Please fill the address")
        navigation.navigate(ROUTE.ADDRESS)
      }
    } else {
      navigation.navigate(ROUTE.PAYMENT)
    }
    return
  }

  return (
    <>

      <Wrapper>
        <HeaderCmp isSearch={false} isAddressBox={false} />
        <CenterCmp flexDirection='column' >
          <Text style={[gStyles.titleText, { marginTop: rw(5) }]}>Delivery Address</Text>
          <AddressBoxCmp item={selectedAddress} setIsVisible={setIsVisible} isVisible={isVisible} />
        </CenterCmp>
        <PaymentBoxCmp totalPrice={totalPrice} />


        <View style={{ backgroundColor: COLORS.WHITE, paddingTop: rh(2) }}>
          <TotalProductCmp totalProducts={cart.length} totalPrice={totalPrice} isToggle={true} isVisible={isVisible} setIsVisible={setIsVisible} />
          {isVisible ?
            <CenterCmp style={{ paddingHorizontal: rw(5), maxHeight: rh(40) }}>
              <FlatList
                data={cart}
                renderItem={({ item }) => <FoodBoxCmp item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: rw(0.2) }}
              />
            </CenterCmp>
            : null}
        </View>
      </Wrapper>
      <BottomBtnCmp title="Place Order" totalPrice={totalPrice} onPress={onPlaceOrder} />
    </>
  )
}

export default OrderReviewScreen

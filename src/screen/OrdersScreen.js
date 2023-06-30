import { Text, View } from 'react-native'
import React from 'react'
import Wrapper from '../component/wrapper/Wrapper'
import { COLORS, rw } from '../utils/constants'
import Lottie from 'lottie-react-native';
import { gStyles } from '../Style'


const OrdersScreen = ({ navigation }) => {
  return (

    <Wrapper >
      {/* <HeaderCmp isSearch={false} /> */}

      <View style={gStyles.containerCenter}>
        <Lottie source={require('../assets/lottie/not-available.json')} style={{ width: rw(90), height: rw(90) }} duration={5000} autoPlay loop />
        <Text style={[gStyles.titleText, { paddingTop: rw(5), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>You haven't Ordered Anything !</Text>
      </View>

      {/* <CenterCmp flexDirection='col' >
        <FlatList
          data={ORDERS}
          renderItem={({ item }) => <OrdersBoxCom item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: rw(0.2) }}
        />
      </CenterCmp> */}

    </Wrapper>
  )
}
export default OrdersScreen

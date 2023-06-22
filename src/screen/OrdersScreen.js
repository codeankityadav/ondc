import { Image, StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Wrapper from '../component/wrapper/Wrapper'
import { rw } from '../utils/constants'
import { CenterCmp, HeaderCmp, OrdersBoxCom } from '../component'
import { ORDERS } from '../utils/constants/Data'

const OrdersScreen = ({ navigation }) => {
  return (

    <Wrapper >
      <HeaderCmp isSearch={false} />

      <CenterCmp flexDirection='col' >
        <FlatList
          data={ORDERS}
          renderItem={({ item }) => <OrdersBoxCom item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: rw(0.2) }}
        />
      </CenterCmp>

    </Wrapper>
  )
}
export default OrdersScreen

const styles = StyleSheet.create({})
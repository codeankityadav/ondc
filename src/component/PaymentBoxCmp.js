import {  Text, View } from 'react-native'
import React from 'react'
import CenterCmp from './wrapper/CenterCmp'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'

const PaymentBoxCmp = (props) => {

    return (
        <CenterCmp flexDirection="column">
            <Text style={[gStyles.titleText, { paddingBottom: rw(3) }]}>Payment Details</Text>
            <PaymentRowCmp totalPrice={props.totalPrice} />
        </CenterCmp>
    )
}

export default PaymentBoxCmp




const PaymentRowCmp = (props) => {
    return (
        <View className="flex-row justify-between items-center" style={{
            borderBottomColor: COLORS.GREY2,
            borderBottomWidth: rw(0.2),
            borderStyle: 'dashed',
            paddingVertical: rw(2)
        }}>
            <Text style={[gStyles.titleDescText]}>MRP Total</Text>
            <Text style={[gStyles.titleDescText]}>₹ {props?.totalPrice}</Text>
        </View>
    )
}
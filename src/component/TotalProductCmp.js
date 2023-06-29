import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'

const TotalProductCmp = (props) => {
    return (
        <View className="flex-row justify-between items-center" style={{ paddingHorizontal: rw(5) }}>
            <Text style={gStyles.titleText}>Groceries Basket({props.totalProducts})</Text>
            <Text style={gStyles.titleText}>₹ {props.totalPice}</Text>
        </View>
    )
}

export default TotalProductCmp

const styles = StyleSheet.create({})
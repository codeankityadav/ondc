import { Text, View } from 'react-native'
import React from 'react'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS } from '../utils/constants'
import { AntDesign, Ionicons } from '../utils/icons/VectorIcon'

const TotalProductCmp = (props) => {
    const { isToggle = false, isVisible = false, setIsVisible = () => { } } = props
    return (
        <View className="flex-row justify-between items-center" style={{ paddingHorizontal: rw(7), marginVertical: rw(5) }}>
            <Text style={gStyles.titleText}>Groceries Basket({props.totalProducts})</Text>
            <View className="flex-row items-center">
                <Text style={[gStyles.titleText, { color: COLORS.GREEN }]}>₹ {props.totalPrice}</Text>
                {isToggle ?
                    <>
                        {
                            isVisible ?
                                <AntDesign name="up" size={rw(6)} color={COLORS.BLACK} style={{ marginLeft: rw(3) }} onPress={() => setIsVisible(false)} /> :
                                <AntDesign name="down" size={rw(6)} color={COLORS.BLACK} style={{ marginLeft: rw(3) }} onPress={() => setIsVisible(true)} />
                        }
                    </>
                    : null}
            </View>
        </View>
    )
}

export default TotalProductCmp

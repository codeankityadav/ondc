import { Image,  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { rh, rw } from '../utils/Dimension'
import { COLORS, FONT_FAMILY } from '../utils/constants'
import { IMAGE } from '../utils/constants/Image'
import { gStyles } from '../Style'
import { Entypo } from '../utils/icons/VectorIcon'

const OrdersBoxCom = ({ item }) => {
    const { status = "Ordered", preview = "Arriving by Jun 20", total = 10 } = item
    return (
        <>
            <TouchableOpacity className="flex-row justify-between items-center"
                style={{
                    paddingHorizontal: rw(5),
                    paddingVertical: rw(7),
                    borderRadius: rw(5),
                    // borderColor: COLORS.GREY2,
                    // borderWidth: rw(0.2),
                    marginVertical: rw(5),
                    elevation: 2,
                    backgroundColor: COLORS.WHITE

                }}
            >
                <View className="flex-row items-center" >
                    <Image
                        source={{ uri: IMAGE.FOODS.CHAINESE_WOK }}
                        resizeMethod='auto'
                        style={{
                            height: rh(10),
                            width: rw(20),
                            borderRadius: rw(5),
                        }} />
                    <View style={{ marginLeft: rw(5), width: rw(45) }}>
                        <Text style={gStyles.titleText}>{status}</Text>
                        <Text style={gStyles.titleDescText}>{preview}</Text>
                        <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.MEDIUM, color: COLORS.BLACK }]}>Groceries ({total} items)</Text>
                    </View>
                </View>
                <Entypo name="chevron-right" size={rw(6)} color={COLORS.BLACK} />
            </TouchableOpacity>
        </>
    )
}

export default OrdersBoxCom

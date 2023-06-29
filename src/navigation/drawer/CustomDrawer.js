import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { gStyles } from '../../Style'
import { rw } from '../../utils/Dimension'
import { COLORS, FONT_FAMILY } from '../../utils/constants'
import { FontAwesome } from '../../utils/icons/VectorIcon'

const CustomDrawer = (props) => {
    return (

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity className="flex-row justify-between items-center"
                    style={{
                        paddingVertical: rw(7),
                        paddingHorizontal: rw(5)

                    }}
                >

                    <FontAwesome name="user-circle" size={rw(15)} color={COLORS.LIGHT_BLUE} />
                    <View style={{ flex: 1, marginLeft: rw(5) }}>
                        <Text style={gStyles.titleText}>Ankit Yadav</Text>
                        <Text style={gStyles.titleDescText}>ankit@gmail.com</Text>
                        <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.MEDIUM, color: COLORS.BLACK }]}>9594371397</Text>
                    </View>
                </TouchableOpacity>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})
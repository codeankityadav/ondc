import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { gStyles } from '../../Style'
import { rw } from '../../utils/Dimension'
import { COLORS, FONT_FAMILY, ROUTE } from '../../utils/constants'
import { FontAwesome } from '../../utils/icons/VectorIcon'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {
    const navigation = useNavigation()
    const { profile } = useSelector(state => state.home)

    return (

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <TouchableOpacity className="flex-row justify-between items-center"
                    style={{
                        paddingVertical: rw(7),
                        paddingHorizontal: rw(5)
                    }}
                    onPress={() => navigation.navigate(ROUTE.PROFILE)}

                >
                    <FontAwesome name="user-circle" size={rw(10)} color={COLORS.LIGHT_BLUE} />

                    {
                        (profile.name.length > 0 && profile.email.length > 0 && profile.phone.length > 0) ?
                            <View style={{ flex: 1, marginLeft: rw(5) }}>
                                <Text style={gStyles.titleText}>{profile.name}</Text>
                                <Text style={gStyles.titleDescText}>{profile.email}</Text>
                                <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.MEDIUM, color: COLORS.BLACK }]}>{profile.phone}</Text>
                            </View>
                            :
                            <Text style={[gStyles.titleText, { maxWidth: rw(40), marginHorizontal: rw(5) }]}>Click to Complete your Profile !</Text>

                    }
                </TouchableOpacity>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

        </View>
    )
}

export default CustomDrawer

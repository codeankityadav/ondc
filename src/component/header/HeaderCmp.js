import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import CenterCmp from '../wrapper/CenterCmp'
import { Entypo, Feather, FontAwesome, Ionicons, Octicons } from '../../utils/icons/VectorIcon'
import { rh, rw } from '../../utils/Dimension'
import { COLORS, ROUTE } from '../../utils/constants'
import { gStyles } from '../../Style'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchKeyword } from '../../redux/slices/homeSlice'

const HeaderCmp = (props) => {
    const { isSearch = false, placeholder = 'Search', isAddressBox = true } = props
    const navigation = useNavigation()
    const route = useRoute();
    const dispatch = useDispatch()
    const { searchKeyword, address, cart } = useSelector(state => state.home)
    const [isSelectedAddress, setIsSelectedAddress] = useState()

    useEffect(() => {
        let filteredAddr = address.filter((d) => d.isPrimary)
        if (filteredAddr.length > 0) {
            setIsSelectedAddress(filteredAddr[0])
        } else if (filteredAddr.length == 0) {
            setIsSelectedAddress(address[0])
        }
    }, [address])



    return (
        <>
            <CenterCmp flexDirection='col' className="flex-row justify-between items-center" style={styles.header}>
                {isSearch
                    ?
                    <Octicons name="three-bars" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.toggleDrawer()} />
                    :
                    <Ionicons name="chevron-back-outline" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.goBack()} />
                }
                {
                    isSearch ?
                        <TouchableOpacity style={styles.textInputContainer} className="flex-row justify-between items-center">
                            <TextInput style={{
                                color: COLORS.GREY
                            }}
                                value={searchKeyword}
                                onChangeText={(text) => dispatch(setSearchKeyword(text))}
                                placeholder={placeholder}
                                placeholderTextColor={COLORS.GREY}
                            />
                            {searchKeyword.length > 0 ? <Entypo name="cross" size={rw(5)} color={COLORS.GREY} onPress={() => dispatch(setSearchKeyword(""))} /> : null}

                        </TouchableOpacity>

                        :
                        <Text style={[gStyles.titleText, { color: COLORS.WHITE }]}>{route.name}</Text>
                }
                {
                    isSearch ?
                        <View className='flex-row justify-center items-center'>

                            <>
                                <Feather name="shopping-cart" size={rw(6)} color={COLORS.WHITE} onPress={() => {
                                    navigation.navigate(ROUTE.CART)
                                }} />
                                {cart.length > 0 && <View style={styles.badge}>
                                    <Text>{cart.length}</Text>
                                </View>}
                            </>

                        </View>
                        :
                        <FontAwesome name="home" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.navigate(ROUTE.HOME_BOTTOM_TAB)} />
                }
            </CenterCmp>
            {
                isAddressBox && address[0]?.pincode ?
                    <CenterCmp className='flex-row justify-start items-center' flexDirection='col' style={{ backgroundColor: '#ffe8ec', paddingVertical: rw(1) }}>
                        <Ionicons name="ios-location-sharp" size={rw(4)} color={COLORS.RED} />
                        <TouchableOpacity onPress={() => navigation.navigate(ROUTE.ADDRESS)}>
                            <Text style={[gStyles.text_h5, { marginLeft: rw(1) }]}> {isSelectedAddress?.name} {isSelectedAddress?.pincode}</Text>
                        </TouchableOpacity>
                    </CenterCmp> : null
            }
        </>
    )
}

export default HeaderCmp

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.RED,
        minHeight: rh(8)
    },
    textInputContainer: {
        backgroundColor: COLORS.WHITE,
        width: rw(60),
        marginVertical: rw(3),
        borderRadius: rw(25),
        height: rh(5),
        paddingHorizontal: rw(5),
    },
    badge: {
        backgroundColor: COLORS.GREEN,
        borderRadius: rw(5),
        width: rw(5),
        height: rw(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -rw(5),
        marginLeft: -rw(2),

    }
})
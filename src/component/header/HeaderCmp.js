import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import CenterCmp from '../wrapper/CenterCmp'
import { Feather, FontAwesome, Ionicons, Octicons } from '../../utils/icons/VectorIcon'
import { rh, rw } from '../../utils/Dimension'
import { COLORS, ROUTE, TEXTS } from '../../utils/constants'
import { gStyles } from '../../Style'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchKeyword } from '../../redux/slices/homeSlice'

const HeaderCmp = (props) => {
    const { isSearch = false, placeholder = 'Search' } = props
    const navigation = useNavigation()
    const route = useRoute();
    const dispatch = useDispatch()
    const { searchKeyword } = useSelector(state => state.home)
    console.log('searchKeyword', searchKeyword)

    return (
        <>
            <CenterCmp flexDirection='col' className="flex-row justify-between items-center" style={styles.header}>
                {isSearch
                    ?
                    <Octicons name="three-bars" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.toggleDrawer()} />
                    :
                    <Ionicons name="arrow-back" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.goBack()} />
                }
                {
                    isSearch ?
                        <TouchableOpacity style={styles.textInputContainer}>
                            <TextInput style={{
                                color: COLORS.GREY
                            }}
                                value={searchKeyword}
                                onChangeText={(text) => dispatch(setSearchKeyword(text))}
                                placeholder={placeholder}
                                placeholderTextColor={COLORS.GREY}
                            />
                        </TouchableOpacity>
                        :
                        <Text style={[gStyles.titleText, { color: COLORS.WHITE }]}>{route.name}</Text>
                }
                {
                    isSearch ?
                        <Feather name="shopping-cart" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.navigate(ROUTE.CART)} />
                        :
                        <FontAwesome name="home" size={rw(6)} color={COLORS.WHITE} onPress={() => navigation.navigate(ROUTE.HOME_BOTTOM_TAB)} />
                }
            </CenterCmp>
            <CenterCmp className='flex-row justify-start items-center' flexDirection='col' style={{ backgroundColor: '#ffe8ec', paddingVertical: rw(1) }}>
                <Ionicons name="ios-location-sharp" size={rw(4)} color={COLORS.RED} />
                <TouchableOpacity onPress={() => navigation.navigate(ROUTE.ADDRESS)}>
                    <Text style={[gStyles.text_h5, { marginLeft: rw(1) }]}>{TEXTS.HOME.LOCATION}</Text>
                </TouchableOpacity>
            </CenterCmp>
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
    }
})
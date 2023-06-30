import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { rw } from '../utils/Dimension'
import { COLORS, ROUTE } from '../utils/constants'
import { gStyles } from '../Style'
import { MaterialCommunityIcons } from '../utils/icons/VectorIcon'
import { useDispatch, useSelector } from 'react-redux'
import { removeAddress, setPrimaryAddress } from '../redux/slices/homeSlice'
import { useNavigation, useRoute } from '@react-navigation/native'

const AddressBoxCmp = ({ setIsVisible, isVisible, item }) => {
    const route = useRoute();
    const navigation = useNavigation()

    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2].name;

    const { address } = useSelector(state => state.home)
    const dispatch = useDispatch()

    const returnIndexOfAddress = (id) => {
        let index = address.findIndex((d) => d.id == id)
        dispatch(setPrimaryAddress(index))
        navigation.navigate(ROUTE.ORDER_REVIEW)
    }

    return (
        <View
            onPress={() => setIsVisible(!isVisible)}
            style={styles.addrBox}
        >
            {route.name == ROUTE.ADDRESS &&
                <>
                    {item?.isPrimary &&
                        <View className="flex-row justify-end items-center" style={{ backgroundColor: COLORS.GREY3 }}>
                            <TouchableOpacity style={styles.isPrimaryBox}>
                                <Text style={[gStyles.titleDescText, { color: COLORS.WHITE }]}>Default</Text>
                            </TouchableOpacity>

                        </View>
                    }
                </>
            }
            <View className="flex-row justify-between items-center" style={{
                paddingHorizontal: rw(3),
                paddingTop: rw(2),
            }}>
                <View style={styles.pinaddrBox}>
                    <Text style={[gStyles.titleText, { textTransform: 'capitalize', }]}>{item?.name}</Text>
                    <Text style={gStyles.titleDescText}>Pincode :  {item?.pincode}</Text>
                    <Text style={[gStyles.titleDescText, { textTransform: 'capitalize' }]}>Address :  {item?.full_address}</Text>
                </View>
                {route.name == ROUTE.ADDRESS && <MaterialCommunityIcons name="delete" size={rw(7)} color={COLORS.RED} onPress={() => dispatch(removeAddress(item.id))} />}
            </View>

            {prevRoute == ROUTE.CART && <TouchableOpacity style={styles.setAsPrimaryBox} onPress={() => returnIndexOfAddress(item.id)}>
                <Text style={[gStyles.titleDescText, { color: COLORS.WHITE }]}>Deliver Here</Text>
            </TouchableOpacity>}
        </View>
    )
}

export default AddressBoxCmp

const styles = StyleSheet.create({
    setAsPrimaryBox: {
        backgroundColor: COLORS.LIGHT_BLUE,
        borderBottomLeftRadius: rw(5),
        borderBottomRightRadius: rw(5),
        paddingHorizontal: rw(3),
        paddingVertical: rw(3)
    },
    isPrimaryBox: {
        backgroundColor: COLORS.GREEN,
        borderTopRightRadius: rw(5),
        paddingHorizontal: rw(3),
        paddingVertical: rw(0),
        // width: rw(30),
        alignItems: 'center'
    },
    typeOfAddrText: {
        backgroundColor: COLORS.LIGHT_BLUE,
        paddingVertical: rw(0.5),
        color: COLORS.WHITE,
        paddingHorizontal: rw(3),
        borderRadius: rw(2),
        marginLeft: rw(3),
        textTransform: 'uppercase'
    },
    addrBox:
    {
        borderRadius: rw(5),
        marginVertical: rw(5),
        elevation: 2,
        backgroundColor: COLORS.WHITE,
        // minWidth: rw(50)
    },
    pinaddrBox: { width: rw(65), paddingHorizontal: rw(3), paddingBottom: rw(3) }
})
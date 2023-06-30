import {  TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { useNavigation } from '@react-navigation/native'
import { ROUTE } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { setSearchKeyword } from '../redux/slices/homeSlice'

const CategoryBoxCmp = (props) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return (
        <TouchableOpacity
            className="flex-col items-center"
            style={{
                marginTop: rw(5),
                flex: 1
            }}
            onPress={() => {
                dispatch(setSearchKeyword(props.title))
                navigation.navigate(ROUTE.HOME)
            }}
        >

            <Image
                source={{ uri: props.imgSrc }}
                resizeMethod='resize'
                style={{
                    height: rw(35),
                    width: rw(25),
                    // borderRadius: rw(20),
                }} />

            {/* <Text style={[gStyles.titleDescText]}>{props.title}</Text> */}
        </TouchableOpacity>
    )
}

export default CategoryBoxCmp

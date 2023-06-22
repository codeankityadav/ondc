import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'

const CategoryBoxCmp = (props) => {
    return (
        <TouchableOpacity
            className="flex-col items-center"
            style={{
                marginTop: rw(5),
                flex: 1
            }}>

            <Image
                source={{ uri: props.imgSrc }}
                resizeMethod='auto'
                style={{
                    height: rw(20),
                    width: rw(20),
                    borderRadius: rw(20),
                }} />

            <Text style={[gStyles.titleDescText]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryBoxCmp

const styles = StyleSheet.create({})
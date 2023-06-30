import {  Text, View } from 'react-native'
import Lottie from 'lottie-react-native';
import React from 'react' 
import { rw } from '../../utils/Dimension';

const LoadingIcon = (props) => {
    const { size = 100 } = props
    return (
        <Lottie source={require('../../assets/lottie/loading.json')} style={{ width: rw(size), height: rw(size) }} duration={5000} autoPlay loop />
    )
}

export default LoadingIcon

import {  Text } from 'react-native'
import React, { useState } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
import { COLORS, rw } from '../utils/constants';
import TextInputCmp from './input/TextInputCmp';
import Lottie from 'lottie-react-native';
import { gStyles } from '../Style';
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../redux/slices/homeSlice';

const AwesomeAlertCmp = ({ showAlert, setShowAlert, title, message = "", messageStyle, titleStyle, confirmText }) => {

    const [isVisible, setIsVisible] = useState(true)
    const [pincode, setPincode] = useState("")
    const dispatch = useDispatch()
    const { address } = useSelector(state => state.home)

    return (
        <AwesomeAlert
            show={showAlert}
            // showProgress={showAlert}
            title={title}
            message={message}
            customView={<>
                {isVisible ?
                    <TextInputCmp width={rw(50)} placeholder="Enter pincode" keyboardType="numeric" maxLength={6} onChangeText={(text) => {
                        setPincode(text)
                    }} />
                    :
                    <>
                        <Lottie source={require('../assets/lottie/not-available.json')} style={{ width: rw(50), height: rw(50) }} duration={5000} autoPlay loop />
                        <Text style={[gStyles.titleText, { paddingTop: rw(5), textAlign: 'center', color: COLORS.LIGHT_BLUE }]}>Not Available in Your Area {address[0]?.pincode} </Text>
                    </>
                }

            </>}
            messageStyle={messageStyle}
            titleStyle={titleStyle}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={!isVisible}
            showConfirmButton={isVisible}
            // cancelText="No, cancel"
            confirmText={confirmText}
            confirmButtonColor={COLORS.LIGHT_GREEN}
            onCancelPressed={() => {
                setShowAlert(false)
            }}
            onConfirmPressed={() => {
                if (pincode.length == 6) {
                    setIsVisible(false)
                    dispatch(setAddress({
                        id: new Date().valueOf(),
                        name: '',
                        room_no: '',
                        area_building_road: '',
                        pincode: pincode,
                        isPrimary : true
                    }))
                }
            }}
        />
    )
}

export default AwesomeAlertCmp

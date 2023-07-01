import React from 'react'
import { HeaderCmp, Wrapper } from '../component'
import Lottie from 'lottie-react-native';
import { Text, View } from 'react-native'
import { gStyles } from '../Style';
import { rw } from '../utils/Dimension';
import { Entypo, FontAwesome, Zocial } from '../utils/icons/VectorIcon';
import { COLORS } from '../utils/constants';

const ContactUsScreen = () => {
    return (
        <Wrapper>
            <HeaderCmp isSearch={false} />
            <View style={gStyles.containerCenter}>
                <Lottie source={require('../assets/lottie/contact.json')} style={{ width: rw(40), height: rw(40), marginBottom: rw(10) }} duration={5000} autoPlay loop />
                <ContactBoxCmp field="Name" title="Ankit Yadav" icon={<FontAwesome name="user-circle" size={rw(10)} color={COLORS.GREEN} />} />
                <ContactBoxCmp field="Email" title="ankit.rama.yadav@gmail.com" icon={<Zocial name="email" size={rw(10)} color={COLORS.GREEN} />} />
                <ContactBoxCmp field="Address" title="100, Azada Nagar, Mithagar road, Mulund East, Mumbai 400081." icon={<Entypo name="address" size={rw(10)} color={COLORS.GREEN} />} />
            </View>
        </Wrapper>
    )
}

export default ContactUsScreen


const ContactBoxCmp = (props) => {
    return (
        <View className="flex-row justify-between items-center" style={{ width: rw(80), marginVertical: rw(2) }}>
            <View style={{ maxWidth: rw(60) }}>
                <Text style={gStyles.titleDescText}>{props.field}</Text>
                <Text style={gStyles.titleText}>{props.title}</Text>
            </View>
            {props.icon}
        </View>
    )
} 
import { Text, FlatList, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { CenterCmp, HeaderCmp, Wrapper } from '../component'
import { Entypo, FontAwesome } from '../utils/icons/VectorIcon'
import { gStyles } from '../Style'
import { rw } from '../utils/Dimension'
import { COLORS, FONT_FAMILY, ROUTE } from '../utils/constants'
import { ORDERS_LINKS } from '../utils/constants/Data'
import ImageTextRowCmp from '../component/ImageTextRowCmp'
import { useNavigation } from '@react-navigation/native'

const AccountScreen = () => {
    const navigation = useNavigation()

    return (
        <Wrapper>
            <HeaderCmp isSearch={false} />

            <CenterCmp flexDirection="col">

                <TouchableOpacity className="flex-row justify-between items-center"
                    style={{
                        paddingVertical: rw(7),
                        borderBottomColor: COLORS.GREY2,
                        borderBottomWidth: rw(0.1),

                    }}
                >
                    <TouchableOpacity className="flex-row items-center" onPress={() => navigation.navigate(ROUTE.PROFILE)} >

                        <FontAwesome name="user-circle" size={rw(25)} color={COLORS.LIGHT_BLUE} />
                        <View style={{ marginLeft: rw(5), width: rw(45) }}>
                            <Text style={gStyles.titleText}>Ankit Yadav</Text>
                            <Text style={gStyles.titleDescText}>ankit@gmail.com</Text>
                            <Text style={[gStyles.titleDescText, { fontFamily: FONT_FAMILY.OUTFIT.MEDIUM, color: COLORS.BLACK }]}>9594371397</Text>
                        </View>
                    </TouchableOpacity>
                    <Entypo name="chevron-right" size={rw(6)} color={COLORS.BLACK} />
                </TouchableOpacity>

                <FlatList
                    data={ORDERS_LINKS}
                    renderItem={({ item }) => <ImageTextRowCmp title={item.title} icon={item.icon} navigateTo={item.navigateTo} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ padding: rw(0.2) }}
                />

            </CenterCmp>

        </Wrapper>
    )
}

export default AccountScreen


// const OrderImageTextCmp = ({ item }) => {
//     return (
//         <TouchableOpacity
//             className="flex-row items-center"
//             style={{
//                 borderBottomColor: COLORS.GREY2,
//                 borderBottomWidth: rw(0.1),
//                 paddingVertical: rw(8)
//             }}>
//             {item.icon}
//             <Text style={[gStyles.titleText, { marginLeft: rw(5) }]}>{item.title}</Text>
//         </TouchableOpacity>
//     )
// }
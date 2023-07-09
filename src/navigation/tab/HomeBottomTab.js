import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, CategoryScreen, OrdersScreen, ProfileScreen } from '../../screen';
import { COLORS, FONT_FAMILY, ROUTE, rw } from '../../utils/constants';
import HomeTopTab from './HomeTopTab';
import { HeaderCmp, Wrapper } from '../../component';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '../../utils/icons/VectorIcon';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const HomeBottomTab = () => {
    const [showAlert, setShowAlert] = React.useState(true)
    const { address } = useSelector(state => state.home)


    return (

        <Wrapper>
            <HeaderCmp isSearch={true} placeholder="Search Food" />
            <Tab.Navigator screenOptions={{
                headerShown: false,
                // tabBarIcon: ({ tintColor }) => (
                //     <FontAwesome name="user-circle" size={rw(25)} color={tintColor} />
                // ),
                tabBarLabelStyle: {
                    fontFamily: FONT_FAMILY.OUTFIT.BOLD,
                    textTransform: 'capitalize'
                },
                tabBarActiveTintColor: COLORS.RED,
                tabBarInactiveTintColor: COLORS.LIGHT_GREY1,
                tabBarPressColor: COLORS.RED,
                tabBarIndicatorStyle: {
                    backgroundColor: COLORS.RED,
                },
            }}
            >
                <Tab.Screen name={ROUTE.HOME} component={HomeTopTab}
                    options={{
                        tabBarIcon: ({ tintColor = COLORS.RED }) => {
                            return (
                                <AntDesign name="home" size={rw(5)} color={tintColor} />
                            )
                        }
                    }} />
                <Tab.Screen name={ROUTE.CATEGORY} component={CategoryScreen} options={{
                    tabBarIcon: ({ tintColor = COLORS.RED }) => {
                        return (
                            <MaterialIcons name="category" size={rw(5)} color={tintColor} />)
                    }
                }} />
                {/* <Tab.Screen name={ROUTE.ACCOUNT} component={AccountScreen} options={{
                    tabBarIcon: ({ tintColor = COLORS.RED }) => {
                        return (
                            <FontAwesome name="user-circle" size={rw(5)} color={tintColor} />)
                    }
                }} /> */}
                <Tab.Screen name={ROUTE.ORDERS} component={OrdersScreen} options={{
                    tabBarIcon: ({ tintColor = COLORS.RED }) => {
                        return (
                            <MaterialCommunityIcons name="order-bool-descending-variant" size={rw(5)} color={tintColor} />
                        )
                    }
                }} />
            </Tab.Navigator>

            {/* {address.length == 0 && <AwesomeAlertCmp
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                messageStyle={styles.messageStyle}
                titleStyle={styles.titleStyle}
                title="Check Avaibility"
                confirmText="Check"
            // message={}
            />} */}

        </Wrapper>


    )
}

export default HomeBottomTab

const styles = StyleSheet.create({
    messageStyle: {
        // paddingHorizontal: rw(20)
    }
})
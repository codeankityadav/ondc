import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, CategoryScreen, OrdersScreen, ProfileScreen } from '../../screen';
import { COLORS, FONT_FAMILY, ROUTE, rw } from '../../utils/constants';
import HomeTopTab from './HomeTopTab';
import { HeaderCmp, Wrapper } from '../../component';
import { FontAwesome } from '../../utils/icons/VectorIcon'; 

const Tab = createBottomTabNavigator();

const HomeBottomTab = () => {




    return (

        <Wrapper>
            <HeaderCmp isSearch={true} placeholder="Search ONDC Foods" />
            <Tab.Navigator screenOptions={{
                headerShown: false,
                // tabBarIcon: ({ tintColor }) => (
                //     <FontAwesome name="user-circle" size={rw(25)} color={tintColor} />
                // ),
                tabBarIcon: ({ tintColor }) => { return (<FontAwesome name="user-circle" size={rw(25)} color={tintColor} />) },
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
                tabBarOptions: {
                    showIcon: true
                },
            }}
            >
                <Tab.Screen name={ROUTE.HOME} component={HomeTopTab} />
                <Tab.Screen name={ROUTE.CATEGORY} component={CategoryScreen} />
                <Tab.Screen name={ROUTE.ACCOUNT} component={AccountScreen} />
                <Tab.Screen name={ROUTE.ORDERS} component={OrdersScreen} />
            </Tab.Navigator>
        </Wrapper>

    )
}

export default HomeBottomTab

const styles = StyleSheet.create({})
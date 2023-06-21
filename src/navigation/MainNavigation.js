import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AddressScreen, CartScreen, CategoryScreen, FoodScreen, HomeScreen, LoginScreen, OrderReview, OrdersScreen, PaymentScreen, ProfileScreen, RestaurantScreen, SplashScreen, VerifyOTPScreen } from '../screen';
import { ROUTE } from '../utils/constants/Route';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const MainNavigation = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTE.SPLASH} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTE.SPLASH} component={SplashScreen} />
                <Stack.Screen name={ROUTE.LOGIN} component={LoginScreen} />
                <Stack.Screen name={ROUTE.VERIFY_OTP} component={VerifyOTPScreen} />
                <Stack.Screen name={ROUTE.HOME} component={HomeScreen} />
                <Stack.Screen name={ROUTE.FOOD} component={FoodScreen} />
                <Stack.Screen name={ROUTE.RESTAURANT} component={RestaurantScreen} />
                <Stack.Screen name={ROUTE.CATEGORY} component={CategoryScreen} />
                <Stack.Screen name={ROUTE.CART} component={CartScreen} />
                <Stack.Screen name={ROUTE.ORDER_REVIEW} component={OrderReview} />
                <Stack.Screen name={ROUTE.PAYMENT} component={PaymentScreen} />
                <Stack.Screen name={ROUTE.ADDRESS} component={AddressScreen} />
                <Stack.Screen name={ROUTE.ORDERS} component={OrdersScreen} />
                <Stack.Screen name={ROUTE.PROFILE} component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})
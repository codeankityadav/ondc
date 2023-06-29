import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS, FONT_FAMILY, ROUTE, rw } from '../../utils/constants';
import { AccountScreen, AddressScreen, OrdersScreen, ProfileScreen } from '../../screen';
import HomeBottomTab from '../tab/HomeBottomTab';
import CustomDrawer from './CustomDrawer';
import { AntDesign, Entypo } from '../../utils/icons/VectorIcon';
import { ImageTextRowCmp } from '../../component';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: COLORS.RED,
                drawerActiveTintColor: COLORS.WHITE,
                drawerInactiveTintColor: COLORS.RED,
                drawerLabelStyle: {
                    fontFamily: FONT_FAMILY.OUTFIT.EXTRABOLD
                }

            }}
            drawerContent={props => <CustomDrawer {...props} />}>

                
            <Drawer.Screen name={ROUTE.HOME_BOTTOM_TAB} component={HomeBottomTab}
                options={{
                    title: "Home"
                }} />
            <Drawer.Screen name={ROUTE.ORDERS} component={OrdersScreen} />
            <Drawer.Screen name={ROUTE.ADDRESS} component={AddressScreen} />
            <Drawer.Screen name={ROUTE.PROFILE} component={ProfileScreen} />
            <Drawer.Screen name={ROUTE.ACCOUNT} component={AccountScreen} />
        </Drawer.Navigator>
    );
}
export default HomeDrawer 
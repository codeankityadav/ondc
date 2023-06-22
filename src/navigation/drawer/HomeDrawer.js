import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTE } from '../../utils/constants';
import { AccountScreen, AddressScreen, OrdersScreen, ProfileScreen } from '../../screen';
import HomeBottomTab from '../tab/HomeBottomTab';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={ROUTE.HOME_BOTTOM_TAB} component={HomeBottomTab} options={{ title: "Home", headerShown: false }} />
            <Drawer.Screen name={ROUTE.ORDERS} component={OrdersScreen} />
            <Drawer.Screen name={ROUTE.ADDRESS} component={AddressScreen} />
            <Drawer.Screen name={ROUTE.PROFILE} component={ProfileScreen} />
            <Drawer.Screen name={ROUTE.ACCOUNT} component={AccountScreen} />
        </Drawer.Navigator>
    );
}
export default HomeDrawer 
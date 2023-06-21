import { createDrawerNavigator } from '@react-navigation/drawer';
import { ROUTE } from '../../utils/constants';
import { AddressScreen, HomeScreen, OrdersScreen, ProfileScreen } from '../../screen';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={ROUTE.HOME} component={HomeScreen} />
            <Drawer.Screen name={ROUTE.ORDERS} component={OrdersScreen} />
            <Drawer.Screen name={ROUTE.ADDRESS} component={AddressScreen} />
            <Drawer.Screen name={ROUTE.PROFILE} component={ProfileScreen} />
        </Drawer.Navigator>
    );
}
export default HomeDrawer
function Feed() { return (<></>) }
function ArticleScreen() { return (<></>) }
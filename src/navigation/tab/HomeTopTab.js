import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FoodScreen, RestaurantScreen } from '../../screen';
import { COLORS, FONT_FAMILY, ROUTE } from '../../utils/constants';

const Tab = createMaterialTopTabNavigator();

const HomeTopTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={ROUTE.FOOD}
            screenOptions={{
                headerShown: false,
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
                    showIcon: false
                },
            }}>
            <Tab.Screen name={ROUTE.RESTAURANT} component={RestaurantScreen} />
            <Tab.Screen name={ROUTE.FOOD} component={FoodScreen} />
        </Tab.Navigator>
    )
}

export default HomeTopTab

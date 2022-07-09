import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import Internal from '../screens/Internal';
import Home from '../screens/Home';

const {Navigator, Screen} = createStackNavigator();

const animatedNavigation: StackNavigationOptions = {
    gestureDirection: 'horizontal',
    gestureEnabled: true,
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const Routes: React.FC = () => {
    return (
        <Navigator screenOptions={animatedNavigation}>
            <Screen options={{title: 'Home'}} name="Home" component={Home} />
            <Screen
                options={{title: 'Internal'}}
                name="Internal"
                component={Internal}
            />
        </Navigator>
    );
};

export default Routes;

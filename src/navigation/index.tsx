import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Internal from '../screens/Internal';
import Home from '../screens/Home';
import useNavigationController from './useNavigationController';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
    const {animatedNavigation} = useNavigationController();
    return (
        <Navigator screenOptions={animatedNavigation}>
            <Screen name="Home" component={Home} />
            <Screen name="Internal" component={Internal} />
        </Navigator>
    );
};

export default Routes;

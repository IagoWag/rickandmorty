import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Internal from '../screens/Internal';
import Home from '../screens/Home';

const {Navigator, Screen} = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
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

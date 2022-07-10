import {
    CardStyleInterpolators,
    StackNavigationOptions,
} from '@react-navigation/stack';

const useNavigationController = () => {
    const animatedNavigation: StackNavigationOptions = {
        gestureDirection: 'horizontal',
        gestureEnabled: true,
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    };
    return {animatedNavigation};
};

export default useNavigationController;

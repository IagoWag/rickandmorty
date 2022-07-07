import {TouchableOpacityProps} from 'react-native';
import {ResponseProps} from '../../screens/Home/types';

export interface CharacterCardProps extends TouchableOpacityProps {
    onPress: () => void;
    item: ResponseProps;
}

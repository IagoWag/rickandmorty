import {TouchableOpacityProps} from 'react-native';
import {ResponseItemProps} from '../../screens/Home/types';

export interface CharacterCardProps extends TouchableOpacityProps {
    onPress: () => void;
    item: ResponseItemProps;
}

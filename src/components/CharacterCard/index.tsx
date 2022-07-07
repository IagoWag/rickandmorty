import React from 'react';
import {View} from 'react-native';
import Icon from '../Icon';
import RowBetween from '../RowBetween';
import Separator from '../Separator';
import Text from '../Text';
import {Container, CharacterImage, CharacterViewText} from './styles';
import {CharacterCardProps} from './types';

const CharacterCard = ({onPress, item, ...rest}: CharacterCardProps) => {
    return (
        <Container {...rest} onPress={onPress}>
            <CharacterImage source={{uri: item.image}} />
            <CharacterViewText>
                <View>
                    <Text isBold size={20}>
                        {item.name}
                    </Text>
                    <Text>{item.species}</Text>
                    <Separator height={10} />
                    <Text>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptates corporis explicabo vero magnam impedit
                        optio.
                    </Text>
                </View>
                <RowBetween>
                    <Text isBold>More info</Text>
                    <Icon icon="chevronRight" activeColor="black" />
                </RowBetween>
            </CharacterViewText>
        </Container>
    );
};

export default CharacterCard;

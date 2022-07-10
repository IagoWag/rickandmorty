import React from 'react';
import {ResponseProps} from '../Home/types';
import {
    Container,
    CharacterImage,
    CharacterHeaderInfo,
    CharacterInfo,
    CharacterInfoConfig,
    CharacterName,
} from './styles';
import Text from '../../components/Text';
import Separator from '../../components/Separator';
import Icon from '../../components/Icon';
import HeaderOptions from '../../components/HeaderOptions';
import {Pressable} from 'react-native';
import Row from '../../components/Row';
import {useNavigation} from '@react-navigation/native';

const Internal = ({route}: any) => {
    /**
     * Navigation
     */
    const {item}: ResponseProps = route.params;

    const {goBack} = useNavigation();

    return (
        <Container>
            <CharacterImage source={{uri: item?.image}}>
                <HeaderOptions
                    left={
                        <Pressable onPress={goBack}>
                            <Row>
                                <Icon icon="arrowLeft" size={20} />
                                <Separator width={10} />
                                <Text size={20}>Back</Text>
                            </Row>
                        </Pressable>
                    }
                />
            </CharacterImage>

            <CharacterInfoConfig>
                <CharacterHeaderInfo>
                    <CharacterName>{item?.name}</CharacterName>
                    <Icon icon="share" activeColor="black" />
                </CharacterHeaderInfo>

                <CharacterInfo>
                    <Text color="#606060" size={15}>
                        {item?.species}
                    </Text>
                    <Separator height={20} />
                    <Text color="#606060" size={16}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Consequatur adipisci hic, iure repellat impedit
                        dolores, vitae nesciunt molestiae aut illum similique
                        placeat rem facilis excepturi odit! Facilis corporis
                        placeat itaque, excepturi numquam unde nesciunt odit
                        molestiae, architecto repudiandae quia dicta qui quam
                        exercitationem nam non. Ratione perspiciatis
                        reprehenderit corporis ipsum, quos ipsa! Quos minus,
                        molestias accusantium corrupti expedita in. Aliquam
                        eligendi cum magni possimus iste totam, maiores fugiat
                        eveniet odit.
                    </Text>
                </CharacterInfo>
            </CharacterInfoConfig>
        </Container>
    );
};

export default Internal;

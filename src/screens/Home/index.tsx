import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import headerLogo from '../../assets/images/headerLogo.png';
import HeaderOptions from '../../components/HeaderOptions';
import Icon from '../../components/Icon';
import Separator from '../../components/Separator';
import Text from '../../components/Text';
import Row from '../../components/Row';
import RowBetween from '../../components/RowBetween';
import {Container, HeaderImage} from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <HeaderOptions
                left={<HeaderImage source={headerLogo} />}
                right={
                    <TouchableOpacity>
                        <Icon icon="search" activeColor="black" />
                    </TouchableOpacity>
                }
            />
            <Separator height={10} />

            <Text isBold size={14}>
                SDAS
            </Text>
            <RowBetween>
                <Text>dsadasd</Text>
                <Separator width={10} />
                <Text>dsdsadasdasdasdaasd</Text>
            </RowBetween>
        </Container>
    );
};

export default Home;

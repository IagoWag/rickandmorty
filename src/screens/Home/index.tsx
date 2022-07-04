import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import headerLogo from '../../assets/images/headerLogo.png';
import HeaderOptions from '../../components/HeaderOptions';
import Icon from '../../components/Icon';
import Separator from '../../components/Separator';
import Text from '../../components/Text';
import Row from '../../components/Row';
import RowBetween from '../../components/RowBetween';
import {Container, HeaderImage, OptionButton} from './styles';

const filterOptions = [
    {
        id: 1,
        label: 'Popular',
    },
    {
        id: 2,
        label: 'A-Z',
    },
    {
        id: 3,
        label: 'Last viewed',
    },
];

const Home: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<number>(1);
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
            <Separator height={20} />

            <Row>
                {filterOptions.map(item => {
                    return (
                        <>
                            <OptionButton
                                key={item.id}
                                isActive={selectedOption === item.id}
                                onPress={() => setSelectedOption(item.id)}>
                                <Text
                                    isBold
                                    color={
                                        selectedOption === item.id
                                            ? 'white'
                                            : 'black'
                                    }>
                                    {item.label}
                                </Text>
                            </OptionButton>

                            <Separator key={item.label} width={5} />
                        </>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Home;

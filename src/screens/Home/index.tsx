import React, {useState, useEffect, useCallback} from 'react';
import {
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';
import headerLogo from '../../assets/images/headerLogo.png';
import HeaderOptions from '../../components/HeaderOptions';
import Icon from '../../components/Icon';
import Separator from '../../components/Separator';
import Text from '../../components/Text';
import Row from '../../components/Row';
import {Container, HeaderImage, OptionButton} from './styles';
import CharacterCard from '../../components/CharacterCard';
import {useNavigation} from '@react-navigation/native';
import {ResponseItemProps, ResponseProps} from './types';
import {getData} from '../../services/resource/character';
import {filterOptions} from './mock';

const Home: React.FC = () => {
    /**
     * Navigation
     */
    const {navigate} = useNavigation();
    const handleNavigateToInternal = ({item}: ResponseProps) => {
        navigate('Internal', {item});
    };
    /**
     * States
     */
    const [selectedOption, setSelectedOption] = useState<number>(1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<ResponseItemProps[]>([]);

    /**
     * Callbacks
     */
    const handleFechtData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await getData();
            setData(response.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Effects
     */

    useEffect(() => {
        handleFechtData();
    }, [handleFechtData]);

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
                            <View key={item.id}>
                                <OptionButton
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
                            </View>
                            <Separator width={10} />
                        </>
                    );
                })}
            </Row>
            <Separator height={20} />
            {loading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    ItemSeparatorComponent={() => <Separator height={10} />}
                    keyExtractor={(item, index) => `${item}-${index}-item`}
                    renderItem={({item}: ResponseProps) => (
                        <CharacterCard
                            item={item}
                            onPress={() => handleNavigateToInternal({item})}
                        />
                    )}
                />
            )}
        </Container>
    );
};

export default Home;

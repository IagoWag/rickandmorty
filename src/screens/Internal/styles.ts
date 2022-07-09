import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
    flex: 1;
`;
export const CharacterImage = styled.ImageBackground`
    flex: 1;
    padding: 20px;
`;

export const CharacterInfoConfig = styled.View`
    padding: 20px;
`;

export const CharacterHeaderInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const CharacterInfo = styled.View``;

export const CharacterName = styled(Text)`
    max-width: 70%;
`;

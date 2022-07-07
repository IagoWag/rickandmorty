import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    elevation: 4;
    background-color: white;
    border-radius: 20px;
`;
export const CharacterImage = styled.Image`
    width: 150px;
    height: 200px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
`;
export const CharacterViewText = styled.View`
    flex: 1;
    padding: 10px;
    justify-content: space-between;
`;
export const CharacterText = styled.Text``;

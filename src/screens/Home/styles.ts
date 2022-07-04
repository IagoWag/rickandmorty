import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;
export const HeaderImage = styled.Image`
    width: 100px;
    height: 50px;
`;
export const OptionButton = styled.Pressable<{isActive: boolean}>`
    background-color: ${({isActive}) => (isActive ? 'red' : 'white')};
    justify-content: center;
    border-radius: 14px;
    padding: 6px 16px;
`;

import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Container = styled.TouchableOpacity`
    margin-top: 10px;
    width: 80%;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.button.font};
`;
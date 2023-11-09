import styled from "styled-components/native";
import { colors } from "../../../constants/colors";

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.background};
`;

export const Input = styled.TextInput`
    padding-left: 5px;
    background-color:${colors.input.background};
    border-radius:5px;
    border-width: 1px;
    border-color: ${colors.input.border};
    width: 80%;
    height: 50px;
`;
import styled from "styled-components/native";
import { colors } from "../../constants/colors";

export const Container = styled.View`
    width: 100%;
    height: 15%;
    background-color: ${colors.header.background};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    flex-direction: row;
`;
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const IconContainer = styled.View`
  flex: 1;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.AILERON_REGULAR};
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  padding-top: 10px;
  text-align: center;
  text-transform: uppercase;
`;

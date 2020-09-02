import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const IconContainer = styled.View`
  flex: 1;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.fonts.LARGE_SIZE - 2}px;
  font-family: ${({ theme }) => theme.fonts.AILERON_SEMI_BOLD};
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  padding-top: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const Image = styled.Image`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
`;

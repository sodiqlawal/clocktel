import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DEVICE_FULL_WIDTH } from '../../utils/device';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  padding-top: ${RFValue(DEVICE_FULL_WIDTH / 6)}px;
`;

export const ClockHands = styled.ImageBackground`
  flex: 1;
  width: 90%;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

export const ClockHandMover = styled.View`
  width: ${RFValue(DEVICE_FULL_WIDTH / 2.1)}px;
  height: ${RFValue(DEVICE_FULL_WIDTH / 2.1)}px;
  border-radius: ${RFValue(DEVICE_FULL_WIDTH / 2.1) / 2}px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
`;

export const ClockHandsHolder = styled.View`
  width: ${RFValue(11)}px;
  height: ${RFValue(11)}px;
  border-radius: ${RFValue(11)}px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  z-index: 4;
  position: absolute;
`;

export const SecondClockHand = styled.View`
  width: 61%;
  height: ${RFValue(4)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
  position: absolute;
  left: ${RFValue(DEVICE_FULL_WIDTH / 2.5) / 2}px;
`;

export const MinuteClockHand = styled.View`
  width: 45%;
  height: ${RFValue(4)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_TEXT};
  position: absolute;
  left: ${RFValue(DEVICE_FULL_WIDTH / 2.5) / 2}px;
`;

export const HourClockHand = styled.View`
  width: 35%;
  height: ${RFValue(5)}px;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
  position: absolute;
  left: ${RFValue(DEVICE_FULL_WIDTH / 2.5) / 2}px;
`;

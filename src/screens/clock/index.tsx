import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '../../theme';
import { useStore } from '../../store';
import getClockStyles from '../../utils/getClockStyles';
import { NavigationInterface } from '../types';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

// IMPORT FOR ALL CUSTOM STYLES
import { Container } from './styles';

// DEFINE SCREEN PROP TYPES
interface ScreenProp {}

export default function ClockScreen(props: ScreenProp) {
  const { colors } = useAppTheme();

  const { dlsState } = useStore();

  return (
    <Container>
      <StatusBar
        translucent
        animated
        style={dlsState.status ? 'light' : 'dark'}
      />
    </Container>
  );
}

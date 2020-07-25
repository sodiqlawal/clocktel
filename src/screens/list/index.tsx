import React from 'react';
import { NavigationInterface } from '../types';
import { Button } from 'react-native-paper';

// IMPORT FOR ALL CUSTOM STYLES
import { Container } from './styles';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

export default function ListScreen(props: ScreenProp) {
  return (
    <Container>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        List Screen
      </Button>
    </Container>
  );
}

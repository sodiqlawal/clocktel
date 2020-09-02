import React, { FunctionComponent, useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as Provider, ThemeContext } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from '../store';
import { styledComponentTheme, paperTheme } from './types';

const ThemeProvider: FunctionComponent = ({ children }) => {
  const { status } = useSelector(({ dlsState }) => dlsState);

  const { DARK_MODE_COLORS, LIGHT_MODE_COLORS, fonts } = styledComponentTheme;
  const colors = status ? DARK_MODE_COLORS : LIGHT_MODE_COLORS;

  return (
    <PaperProvider
      theme={paperTheme}
      settings={{ icon: (props) => <AntDesign {...props} /> }}
    >
      <StatusBar translucent animated style={status ? 'light' : 'dark'} />
      <Provider theme={{ fonts, colors }}>{children}</Provider>
    </PaperProvider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);

export default ThemeProvider;

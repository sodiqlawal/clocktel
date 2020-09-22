import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '../../theme';
import { useStore } from '../../store';
import getClockStyles from '../../utils/getClockStyles';
import { NavigationInterface } from '../types';
import ClockSlide from './widgets/clockSlide';
import { FlatList, View } from 'react-native';
import { TimeZones } from '../../constants/timeZone';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

// IMPORT FOR ALL CUSTOM STYLES
import { Container } from './styles';
import { TimeZoneInterface } from '../../store/timezone/types';
import { TouchableHighlight } from 'react-native-gesture-handler';

// DEFINE SCREEN PROP TYPES
interface ScreenProp {}

// DEFINE TYPES FOR FLATLIST SEPARATORS
interface TSeparators {
  highlight: () => void;
  unhighlight: () => void;
  updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
}

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
      <View>
        <FlatList
          data={TimeZones}
          renderItem={({
            item,
            separators
          }: {
            item: TimeZoneInterface;
            separators: TSeparators;
          }) => (
            <TouchableHighlight
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <ClockSlide {...item} />
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.timezone}
        />
      </View>
    </Container>
  );
}

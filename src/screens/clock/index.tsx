import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useAppTheme } from '../../theme';
import { useStore } from '../../store';
import getClockStyles from '../../utils/getClockStyles';
import { NavigationInterface } from '../types';
import ClockSlide from './widgets/clockSlide';
import { FlatList, View, Animated, Easing } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import dayjs from 'dayjs';
//@ts-ignore
import { NeuView } from 'react-native-neu-element';
import APP_ICONS from '../../../assets/icons';
import { DEVICE_FULL_WIDTH } from '../../utils/device';
import DLSActions from '../../store/dls/actions';

// DEFINE SCREEN PROP TYPES
interface ScreenProp extends NavigationInterface {}

// IMPORT FOR ALL CUSTOM STYLES
import {
  Container,
  ClockHands,
  ClockHandMover,
  ClockHandsHolder,
  HourClockHand,
  MinuteClockHand,
  SecondClockHand
} from './styles';

import { TimeZoneInterface } from '../../store/timezone/types';

// DEFINE SCREEN PROP TYPES
interface ScreenProp {}

const AnimatedClockHandMover = Animated.createAnimatedComponent(ClockHandMover);
const TICK_INTERVAL = 1000;

export default function ClockScreen(props: ScreenProp) {
  const { colors } = useAppTheme();
  const { dlsState, timeZones } = useStore();
  const [state] = useState({
    index: new Animated.Value(0),
    tick: new Animated.Value(0)
  });

  let _timer = 0;
  let _ticker: any = null;

  const animate = () => {
    Animated.timing(state.index, {
      toValue: state.tick,
      duration: TICK_INTERVAL / 2,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    const current = dayjs();
    const diff = current.endOf('day').diff(current, 'second');
    const oneDay = 24 * 60 * 60;
    _timer = oneDay - diff;
    state.tick.setValue(_timer as any);
    state.index.setValue(_timer - 30);

    animate();

    _ticker = setInterval(() => {
      _timer += 1;
      state.tick.setValue(_timer as any);
    }, TICK_INTERVAL);

    return () => {
      clearInterval(_ticker);
      _ticker = null;
    };
  }, []);

  const { index } = state;

  const interpolated = {
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg']
  };

  const rotateSecond = Animated.multiply(index, 6);
  const rotateMinute = Animated.divide(rotateSecond, new Animated.Value(60));
  const rotateHour = Animated.divide(rotateMinute, new Animated.Value(12));

  const { firstClockStyle, secondClockStyle } = getClockStyles(dlsState.status);

  return (
    <Container>
      <StatusBar
        translucent
        animated
        style={dlsState.status ? 'light' : 'dark'}
      />

      <NeuView
        concave
        color={colors.CLOCK_INSET}
        width={RFValue(DEVICE_FULL_WIDTH / 1.6)}
        height={RFValue(DEVICE_FULL_WIDTH / 1.6)}
        borderRadius={RFValue(DEVICE_FULL_WIDTH / 1.6)}
        customLightShadow={firstClockStyle.lightShadow}
        customDarkShadow={firstClockStyle.darkShadow}
      >
        <ClockHands source={APP_ICONS.clock_hands} resizeMode="contain">
          <NeuView
            color={colors.CLOCK_INSET}
            width={RFValue(DEVICE_FULL_WIDTH / 2.1)}
            height={RFValue(DEVICE_FULL_WIDTH / 2.1)}
            borderRadius={RFValue(DEVICE_FULL_WIDTH / 2.1)}
            customLightShadow={secondClockStyle.lightShadow}
            customDarkShadow={secondClockStyle.darkShadow}
          >
            <ClockHandsHolder />

            <AnimatedClockHandMover
              style={{
                transform: [{ rotate: rotateHour.interpolate(interpolated) }]
              }}
            >
              <HourClockHand style={{ backgroundColor: colors.PRIMARY_TEXT }} />
            </AnimatedClockHandMover>

            <AnimatedClockHandMover
              style={{
                transform: [{ rotate: rotateMinute.interpolate(interpolated) }]
              }}
            >
              <MinuteClockHand />
            </AnimatedClockHandMover>

            <AnimatedClockHandMover
              style={{
                transform: [{ rotate: rotateSecond.interpolate(interpolated) }]
              }}
            >
              <SecondClockHand />
            </AnimatedClockHandMover>
          </NeuView>
        </ClockHands>
      </NeuView>

      <FlatList
        data={timeZones.data}
        ListEmptyComponent={<View>Loading...</View>}
        pagingEnabled
        horizontal
        renderItem={({ item }: { item: TimeZoneInterface }) => (
          <ClockSlide {...item} />
        )}
        keyExtractor={(item) => item.timezone.split('/')[1]}
      />
    </Container>
  );
}

import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
//@ts-ignore
import { Title, Subheading } from 'react-native-paper';
import { useAppTheme } from '../../../../theme';
import { TimeZoneInterface } from '../../../../store/timezone/types';
import getLocaleTime from '../../../../utils/getLocaleTime';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// IMPORT FOR ALL CUSTOM STYLES
import { ClockDigits } from './styles';
import {
  Container,
  ClockHands,
  ClockHandMover,
  ClockHandsHolder,
  HourClockHand,
  MinuteClockHand,
  SecondClockHand
} from '../../styles';

import { View, Text, Animated , ScrollView, Dimensions} from 'react-native';

const clockHandImage = require('../../../../../assets/images/clock_hands.png');

// DEFINE SCREEN PROP TYPES
interface ClockSlideProp extends TimeZoneInterface {}

export default function ClockSlide(props: ClockSlideProp) {
  const { timezone, datetime, dst } = props;
  const { colors, fonts } = useAppTheme();

  const [continent, country] = timezone.split('/');

  const time = getLocaleTime({ timezone, datetime: new Date(datetime) });

  const onSwipeLeft = () => {
    return alert('Swipe left');
  };

  const LeftAction = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    return (
      <View>
        <Animated.Text style={[{ transform: [{ scale }] }]}>
          Swipe left
        </Animated.Text>
      </View>
    );
  };

  const rightAction = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    return (
      <View>
        <Animated.Text style={[{ transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </View>
    );
  };

  let screenWidth = Dimensions.get('window').width;
  let screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView horizontal={true}>
    {/* <Swipeable
      renderLeftActions={LeftAction}
      onSwipeableLeftOpen={onSwipeLeft}
      renderRightActions={rightAction}
    > */}
      <ClockDigits style={{width:screenWidth}}>
        <ClockHands source={clockHandImage}>
          <Container>
            <ClockHandsHolder />
            <ClockHandMover />
            <HourClockHand />
            <MinuteClockHand />
            <SecondClockHand />
          </Container>
        </ClockHands>
        <Subheading
          style={{
            fontFamily: fonts.AILERON_SEMI_BOLD,
            fontSize: RFValue(fonts.LARGE_SIZE * 1.7),
            color: colors.SECONDARY,
            lineHeight: RFValue(fonts.LARGE_SIZE * 1.7),
            textTransform: 'capitalize'
          }}
        >
          {country.replace('_', ' ')}
        </Subheading>
        <Title
          style={{
            fontFamily: fonts.AILERON_SEMI_BOLD,
            fontSize: RFValue(fonts.LARGE_SIZE * 3),
            color: colors.PRIMARY_TEXT,
            lineHeight: RFValue(fonts.LARGE_SIZE * 3),
            textTransform: 'uppercase',
            marginTop: RFValue(20)
          }}
        >
          {time}
        </Title>
        <Subheading
          style={{
            fontFamily: fonts.AILERON_SEMI_BOLD,
            fontSize: RFValue(fonts.LARGE_SIZE + 4),
            color: colors.SECONDARY_TEXT,
            lineHeight: RFValue(fonts.LARGE_SIZE + 4),
            textTransform: 'capitalize',
            marginTop: RFValue(10)
          }}
        >
          {continent}
        </Subheading>
      </ClockDigits>
    {/* </Swipeable> */}
    </ScrollView>
  );
}

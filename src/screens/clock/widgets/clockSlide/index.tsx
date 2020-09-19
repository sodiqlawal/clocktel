import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
//@ts-ignore
import { Title, Subheading } from 'react-native-paper';
import { useAppTheme } from '../../../../theme';
// import { TimeZoneInterface } from '../../../../store/timeZone/types';
import { TimeZoneInterface } from '../../../../store/timezone/types';
import getLocaleTime from '../../../../utils/getLocaleTime';

// IMPORT FOR ALL CUSTOM STYLES
import { ClockDigits } from './styles';

// DEFINE SCREEN PROP TYPES
interface ClockSlideProp extends TimeZoneInterface {}

export default function ClockSlide(props: ClockSlideProp) {
  const { timezone, datetime, dst } = props;
  const { colors, fonts } = useAppTheme();

  const [continent, country] = timezone.split('/');

  const time = getLocaleTime({ timezone, datetime });

  return (
    <ClockDigits>
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
  );
}

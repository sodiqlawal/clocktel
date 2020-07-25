import 'styled-components';
import { configureFonts, DefaultTheme } from 'react-native-paper';

// All app colors
enum COLORS {
  WHITE = '#F7F9FC',
  DARK_BLUE = '#142550',
  PRIMARY = '#D92D7B',
  SECONDARY = '#E7EEFB',
  PRIMARY_TEXT = '#142550',
  SECONDARY_TEXT = '#B0B4BD',
  ACTION = '#D92D7B'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 8,
  MEDIUM_SIZE = 12,
  LARGE_SIZE = 16,
  AILERON_REGULAR = 'aileronRegular',
  AILERON_SEMI_BOLD = 'aileronSemiBold',
  AILERON_BOLD = 'aileronBold'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      WHITE: string,
      DARK_BLUE:string,
      PRIMARY:string,
      SECONDARY:string,
      PRIMARY_TEXT:string,
      SECONDARY_TEXT:string,
      ACTION:string
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      AILERON_REGULAR: string,
      AILERON_SEMI_BOLD: string,
      AILERON_BOLD: string
    };
  }
}

const paperFontConfig = {
  default: {
    regular: {
      fontFamily: FONTS.AILERON_REGULAR,
      fontWeight: 'normal'
    },

    medium: {
      fontFamily: FONTS.AILERON_SEMI_BOLD,
      fontWeight: 'normal'
    },

    light: {
      fontFamily: FONTS.AILERON_REGULAR,
      fontWeight: 'normal'
    },

    thin: {
      fontFamily: FONTS.AILERON_REGULAR,
      fontWeight: 'normal'
    }
  }
};

export const paperTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.PRIMARY,
    accent: COLORS.SECONDARY,
    background: COLORS.WHITE,
    surface: COLORS.WHITE,
    text: COLORS.PRIMARY_TEXT,
    disabled: COLORS.SECONDARY_TEXT
  },
  // @ts-ignore
  fonts: configureFonts(paperFontConfig)
};

// App theme
export const styledComponentTheme = { colors: COLORS, fonts: FONTS };

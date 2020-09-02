import 'styled-components';
import { configureFonts, DefaultTheme } from 'react-native-paper';

// All app colors
enum DARK_MODE_COLORS {
  WHITE = '#FFFFFF',
  PRIMARY = '#142550',
  SECONDARY = '#D92D7B',
  DARK_BLUE = '#142550',
  LIGHT_GREY = '#F7F9FC',
  CLOCK_INSET = '#22335D',
  PRIMARY_TEXT = '#FFFFFF',
  SECONDARY_TEXT = '#B0B4BD',
  ICON_TINT_COLOR = '#FFFFFF'
}

enum LIGHT_MODE_COLORS {
  WHITE = '#FFFFFF',
  PRIMARY = '#EDF1FB',
  SECONDARY = '#D92D7B',
  DARK_BLUE = '#142550',
  LIGHT_GREY = '#F7F9FC',
  CLOCK_INSET = '#E7EEFB',
  PRIMARY_TEXT = '#142550',
  SECONDARY_TEXT = '#B0B4BD',
  ICON_TINT_COLOR = '#142550'
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
      WHITE: string;
      PRIMARY: string;
      DARK_BLUE: string;
      SECONDARY: string;
      LIGHT_GREY: string;
      CLOCK_INSET: string;
      PRIMARY_TEXT: string;
      SECONDARY_TEXT: string;
      ICON_TINT_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      LARGE_SIZE: number;
      MEDIUM_SIZE: number;
      AILERON_BOLD: string;
      AILERON_REGULAR: string;
      AILERON_SEMI_BOLD: string;
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
    surface: LIGHT_MODE_COLORS.WHITE,
    primary: LIGHT_MODE_COLORS.PRIMARY,
    accent: LIGHT_MODE_COLORS.SECONDARY,
    background: LIGHT_MODE_COLORS.WHITE,
    text: LIGHT_MODE_COLORS.PRIMARY_TEXT
  },
  // @ts-ignore
  fonts: configureFonts(paperFontConfig)
};

// App theme
export const styledComponentTheme = {
  fonts: FONTS,
  DARK_MODE_COLORS,
  LIGHT_MODE_COLORS
};

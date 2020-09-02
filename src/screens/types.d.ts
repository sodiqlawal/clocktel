import { StackNavigationProp, RouteProp } from "@react-navigation/stack";
import { SwiperInternals } from "react-native-swiper";
import { TimeZoneInterface } from "../store/timeZone/types";

// App Navigation prop types
export type RootStackParamList = {
  ClockScreen: undefined;
  ListScreen: undefined;
  SettingScreen: undefined;
};

interface StackScreenInterface {
  navigation: StackNavigationProp<RootStackParamList, string>;
  route: RouteProp<RootStackParamList, string>;
}

export interface NavigationInterface extends StackScreenInterface {
  testID?: string;
}

export interface SwiperInternalState extends SwiperInternals {
  children: { key: string; props: TimeZoneInterface }[];
}

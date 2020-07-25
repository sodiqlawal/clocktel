import { StackNavigationProp, RouteProp } from '@react-navigation/stack';

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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RFValue } from 'react-native-responsive-fontsize';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
//@ts-ignore
import { NeuButton } from 'react-native-neu-element';
import BottomNavigator from './navigator';
import { GLOBAL_HEADER_STYLE } from './constants';
import { useAppTheme } from './theme';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  const { colors } = useAppTheme();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitle: () => null,
          headerLeft: () => (
            <NeuButton
              color={colors.PRIMARY}
              width={RFValue(40)}
              height={RFValue(40)}
              borderRadius={RFValue(40)}
            >
              <Entypo name="plus" size={RFValue(25)} color={colors.SECONDARY} />
            </NeuButton>
          ),
          headerLeftContainerStyle: { paddingLeft: 20, paddingTop: 5 },
          headerRight: () => (
            <NeuButton
              concave
              color={colors.PRIMARY}
              width={RFValue(40)}
              height={RFValue(40)}
              borderRadius={RFValue(40)}
            >
              <MaterialCommunityIcons
                name="pencil"
                size={RFValue(22)}
                color={colors.SECONDARY}
              />
            </NeuButton>
          ),
          headerRightContainerStyle: { paddingRight: 20, paddingTop: 5 },
          headerStyle: {
            ...GLOBAL_HEADER_STYLE,
            backgroundColor: colors.PRIMARY
          }
        }}
      >
        <RootStack.Screen name="ClockScreen" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

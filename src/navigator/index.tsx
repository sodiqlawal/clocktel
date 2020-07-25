import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClockIcon from '../../assets/icons/clockIcon';
import ListIcon from '../../assets/icons/listIcon';
import SettingsIcon from '../../assets/icons/settingsIcon';
import { useAppTheme } from '../theme';
import Screens from '../screens';

// IMPORT FOR ALL CUSTOM STYLES
import { IconContainer, Label } from './styles';

export type TabBarIconTypes = { color: string };

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useAppTheme();

  return (
    <BottomTab.Navigator
      activeColor={colors.PRIMARY_TEXT}
      inactiveColor={colors.SECONDARY_TEXT}
      barStyle={{ 
        backgroundColor: colors.WHITE,
        borderTopWidth: 0,
        shadowOpacity: 0,
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 0,
        elevation: 0
       }}
      initialRouteName="ClockScreen"
      labeled={false}
    >
      <BottomTab.Screen
        name="ClockScreen"
        component={Screens.ClockScreen}
        options={{
          tabBarIcon: ({ color }: TabBarIconTypes) => (
            <IconContainer>
              <ClockIcon fillColor={color} />
              <Label style={{ color }}>
                clock
              </Label>
            </IconContainer>
          )
        }}
      />

      <BottomTab.Screen
        name="ListScreen"
        component={Screens.ListScreen}
        options={{
          tabBarIcon: ({ color }: TabBarIconTypes) => (
            <IconContainer>
              <ListIcon fillColor={color} />
              <Label style={{ color }}>
                list
              </Label>
            </IconContainer>
          )
        }}
      />

      <BottomTab.Screen
        name="SettingScreen"
        component={Screens.SettingScreen}
        options={{
          tabBarIcon: ({ color }: TabBarIconTypes) => (
            <IconContainer>
              <SettingsIcon fillColor={color} />
              <Label style={{ color }}>
                settings
              </Label>
            </IconContainer>
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

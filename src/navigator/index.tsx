import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useAppTheme } from '../theme';
import APP_ICONS from '../../assets/icons';
import Screens from '../screens';

// IMPORT FOR ALL CUSTOM STYLES
import { IconContainer, Label, Image } from './styles';

export type TabBarIconTypes = { color: string };

const BottomTab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = useAppTheme();

  return (
    <BottomTab.Navigator
      activeColor={colors.PRIMARY_TEXT}
      inactiveColor={colors.SECONDARY_TEXT}
      barStyle={{
        backgroundColor: colors.PRIMARY,
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
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <Image
                resizeMode="contain"
                source={
                  focused ? APP_ICONS.alarm_active : APP_ICONS.alarm_inactive
                }
                style={{ tintColor: colors.ICON_TINT_COLOR }}
              />
              <Label style={{ color }}>clock</Label>
            </IconContainer>
          )
        }}
      />

      <BottomTab.Screen
        name="ListScreen"
        component={Screens.ListScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <Image
                resizeMode="contain"
                source={
                  focused ? APP_ICONS.list_active : APP_ICONS.list_inactive
                }
                style={{ tintColor: colors.ICON_TINT_COLOR }}
              />
              <Label style={{ color }}>list</Label>
            </IconContainer>
          )
        }}
      />

      <BottomTab.Screen
        name="SettingScreen"
        component={Screens.SettingScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <Image
                resizeMode="contain"
                source={
                  focused
                    ? APP_ICONS.settings_active
                    : APP_ICONS.settings_inactive
                }
                style={{ tintColor: colors.ICON_TINT_COLOR }}
              />
              <Label style={{ color }}>settings</Label>
            </IconContainer>
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

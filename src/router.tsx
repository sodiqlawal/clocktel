import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//@ts-ignore
import { NeuButton } from "react-native-neu-element";
import BottomNavigator from "./navigator";
import { GLOBAL_HEADER_STYLE } from "./constants";
import { useAppTheme } from "./theme";
import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

const RootStack = createStackNavigator();

export default function AppNavigator() {
  const { fonts, colors } = useAppTheme();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerTitle: () => null,
          headerLeft: () => (
            <NeuButton color="#eef2f9" width={30} height={30} borderRadius={30}>
              <Entypo name="plus" size={RFValue(20)} color={colors.WHITE} />
            </NeuButton>
          ),
          headerStyle: {
            ...GLOBAL_HEADER_STYLE,
            backgroundColor: colors.WHITE,
          },
        }}
      >
        <RootStack.Screen name="ClockScreen" component={BottomNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

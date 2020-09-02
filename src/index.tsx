import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ThemeProvider from "./theme";
import Router from "./router";
import { StoreProvider } from "./store";

export default function AppRouter() {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </StoreProvider>
  );
}

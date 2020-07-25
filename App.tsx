import React, { useEffect, useState } from "react";
import { enableScreens } from "react-native-screens";
import loadResources from "./src/libs/loadResources";
import AppRouter from "./src";

enableScreens();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      await loadResources();
      setIsAppReady(true);
    })();
  }, []);

  return isAppReady ? <AppRouter /> : null;
}

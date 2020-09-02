//@ts-nocheck
const { SERVER_BASE_URI } = 'react-native-dotenv';
import Reactotron from 'reactotron-react-native';

// FIX THIS TO USE ENVIRONMENT VARIABLES (APP SECRETES)
const ENVIRONMENT_VARIABLES = {
  SERVER_BASE_URI: SERVER_BASE_URI || 'http://worldtimeapi.org/api/timezone'
};

declare global {
  interface Console {
    tron: (...args: any[]) => void;
  }
}

if (__DEV__) {
  Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = Reactotron.log;
}

export default ENVIRONMENT_VARIABLES;

import { YellowBox } from 'react-native';
import { registerRootComponent } from 'expo';

YellowBox.ignoreWarnings([
  'Failed prop type: NeuButton: prop type',
  'Failed prop type: NeuView: prop type'
]);

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

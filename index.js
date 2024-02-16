/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Signup from './src/pages/Auth/Signup';
import Login from './src/pages/Auth/Login';

// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Signup);
AppRegistry.registerComponent(appName, () => App);

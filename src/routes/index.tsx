import React from 'react';
import {createAppContainer} from 'react-navigation';
import App from '../App';
import Splash from '../views/splash';
import {createStackNavigator} from 'react-navigation-stack';
import LogIn from '../views/logIn/LogIn';

const Routes = createStackNavigator(
  {
    Splash: {screen: Splash},
    Main: {screen: App},
    LogIn: {screen: LogIn},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
export default createAppContainer(Routes);

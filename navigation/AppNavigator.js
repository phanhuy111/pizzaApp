import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen'
import LoginScreen from '../WelcomeScreen/LoginScreen'

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Main: MainTabNavigator,
  })
);

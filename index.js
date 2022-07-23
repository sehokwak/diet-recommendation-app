import React from 'react';
import { AppRegistry } from 'react-native';
import App from "./App";
import { Provider } from "react-redux";

import configureStore from './src/store';

const appName = 'diet-recommendation-app'
const store = configureStore();

const FoodApp = () =>
  <Provider store = {store}>
    <App/>
  </Provider>

AppRegistry.registerComponent(appName, () => FoodApp);
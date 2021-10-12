import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import analyze from './src/screens/analyze'; 
import DietScreen from "./src/screens/DietScreen";
import NameScreen from "./src/screens/NameScreen";
import RestrictionScreen from "./src/screens/RestrictionScreen";
import RecommendScreen from "./src/screens/RecommendScreen";

import { Provider } from "react-redux";
import configureStore from './src/store';
import React from "react";

const store = configureStore();


const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Analyze: analyze, 
    Name: NameScreen,
    Diet: DietScreen,
    Restriction: RestrictionScreen,
    Recommend: RecommendScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const AppContainer = createAppContainer(navigator);

export default () =>
  <Provider store={store}>
    <AppContainer/>
  </Provider>;


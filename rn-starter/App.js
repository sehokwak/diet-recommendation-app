import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import TextScreen from './src/screens/TextScreen';
import analyze from './src/screens/analyze'; 
import ListFoods from './src/screens/ListFoods'; 
import styles from './src/screens/styles'; 
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
    Components: ComponentsScreen,  
    Text: TextScreen, 
    Analyze: analyze, 
    List: ListFoods, 
    Style: styles,
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


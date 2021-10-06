import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import TextScreen from './src/screens/TextScreen';
import analyze from './src/screens/analyze'; 
import ListFoods from './src/screens/ListFoods'; 



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,  
    Text: TextScreen, 
    Analyze: analyze, 
    List: ListFoods
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);



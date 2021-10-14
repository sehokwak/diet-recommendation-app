import React, {useState} from 'react'; 
import { Button, FlatList, Text, TextInput, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



const RecommendScreen = ({navigation}) => {
  const [showList, setShowList] = useState(false)
  const [Recipes, setRecipes] = useState([])

  const dispatch = useDispatch();

  const nickname = useSelector(state => state.nameReducer.nickname)
  const dietList = useSelector(state => state.foodReducer.dietList)
  const restrictions = useSelector(state => state.foodReducer.restrList)
  
  const [cuisine, setCuisine] = useState('');
  const [query, setQuery] = useState('');
  
  
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: query,
      diet: dietList.toString(),
      intolerances: restrictions.toString(),
      number: '10',
      offset: '0',
      cuisine: cuisine,
      type: ''
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '85fe4b0aa1msh378a060a5f544fbp15e8edjsnc3884c1c12c4'
    }
  };

  
  const displayFunction = (recipeList) => {
    var tempL = [];
    for (let i = 0; i < recipeList.length; i++) {
      tempL = tempL.concat({key: recipeList[i]["title"]});
    }
    return tempL;
  }

  const callAPI = () => {
    axios.request(options)
      .then(function (response) {
      const tempList = displayFunction(response.data["results"]);
      setRecipes(tempList)
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
<<<<<<< HEAD
    <View>
      {/* <Text>{nickname}, what cuisine would you like?</Text>
=======

    <View>  
      <Text>{nickname}, what cuisine would you like?</Text>
>>>>>>> origin/master
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder='American, Thai, Korean, Chinese etc.'
        onChangeText={(newValue) => setCuisine(newValue) }
        /> 
      <Text>What would you like to eat?</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false} 
        placeholder='Burger, Taco, etc.'
        onChangeText={(newValue) => setQuery(newValue) }
        />  */}
      <Button
        title="See Recommendations"
        onPress={() => {
          callAPI()
          setShowList(true)
        }}/>
      { (showList) && <FlatList
        data={Recipes}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />}

    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    margin: 20, 
    borderColor: 'black', 
    borderWidth: 1
  }
});


export default RecommendScreen;


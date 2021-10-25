import React, {useState} from 'react'; 
import { Button, FlatList, Text,  StyleSheet, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TouchableHighlight } from 'react-native-gesture-handler';



const RecommendScreen = ({navigation}) => {
  const [showList, setShowList] = useState(false)
  const [Recipes, setRecipes] = useState([])
  const [offset, setOffset] = useState(0);
  const [title, setTitle] = useState('See Recommendations!')
  const [buttonSelected, setButton] = useState(false)
  
  const dispatch = useDispatch();

  const nickname = useSelector(state => state.nameReducer.nickname)
  const dietList = useSelector(state => state.foodReducer.dietList)
  const restrictions = useSelector(state => state.foodReducer.restrList)
  
  // const [cuisine, setCuisine] = useState('');
  // const [query, setQuery] = useState('');
  
  
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: '',
      diet: dietList.toString(),
      intolerances: restrictions.toString(),
      number: '100',
      offset: offset.toString(),
      cuisine: '',
      type: ''
    },
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '85fe4b0aa1msh378a060a5f544fbp15e8edjsnc3884c1c12c4'
    }
  };

  const updateResults = (currentList) => {
    if (currentList.length != 0) {
      setOffset(offset + currentList.length);

    }
  }
  
  const displayFunction = (recipeList) => {
    var tempL = [];
    for (let i = 0; i < recipeList.length; i++) {
      tempL = tempL.concat({
        id: recipeList[i]["id"].toString(),
        title: recipeList[i]["title"]
      });
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
    <ScrollView style={styles.container}>   

      {/* <Text>{nickname}, what cuisine would you like?</Text>
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
        title={title}
        onPress={() => {
          updateResults(Recipes)
          callAPI()
          setShowList(true)
          setTitle("Refresh Results")
        }}/>
      { (showList) && <FlatList
        data={Recipes}
        renderItem={({item}) => 
          <TouchableHighlight
            style={[styles.button, ]}
            key={item.id}
            onPress={() => {
              setButton(!buttonSelected)
            }}>
            <View style={[styles.button, {backgroundColor:buttonSelected ? "rgb(52, 199, 89)" : "rgb(0, 122, 255)"}]}>
              <Text>{item.title}</Text>
            </View>
            {/* //TODO: create new global list with menu ID's, append to array */}
          </TouchableHighlight>
          
        }
      />}
    </ScrollView>
  );
};

// const buttonColor = buttonSelected ? "rgb(52, 199, 89)" : "rgb(0, 122, 255)"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff0", 
    // alignItems: 'center'
  },
  input: {
    margin: 10, 
    borderColor: 'white', 
    borderWidth: 1
  },
  button: {
    alignItems: "center",
    backgroundColor: "#feeae9",
    padding: 10
  }
});


export default RecommendScreen;
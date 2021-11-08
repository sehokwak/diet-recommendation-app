import React, {useState} from 'react'; 
import { Button, FlatList, Image, Text, RefreshControl,  StyleSheet, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { setSelectedList } from '../actions/actions';



const RecommendScreen = ({navigation}) => {
  const [showImage, setShowImage] = useState(true)
  const [showList, setShowList] = useState(false)
  const [Recipes, setRecipes] = useState([])
  const [offset, setOffset] = useState(0);
  const [title, setTitle] = useState('See the results!!')
  const [selectRecipe, setSelectRecipe] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [checkList, setList] = useState([])
  

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const onRefresh = (() => {
    updateResults(Recipes)
    callAPI()
    setShowList(true)
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  });

  
  
  const dispatch = useDispatch();
  const submitSelectedList = (list) => {
    dispatch(setSelectedList(list));
  }

  const nickname = useSelector(state => state.nameReducer.nickname)
  const dietList = useSelector(state => state.foodReducer.dietList)
  const restrictions = useSelector(state => state.foodReducer.restrList)

  
  /* API call for getting list of recipes */
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
  /* end first api call */

  console.log(dietList.toString())

  return (
    <View style={styles.backgroundPage}>
      {(showImage) && <Image
        source={require('../../assets/analyze_gif.gif')}
        style={{width: 320, height: 500 }}
      />}
      <Button
        title={title}
        onPress={() => {
          setShowImage(false)
          if (showImage) {
            callAPI()
            setShowList(true)
            setTitle("See Recipes")
          } else {
            submitSelectedList(checkList)
            navigation.navigate("ResultsTwo")
          }
          
        }}/>
      { (showList) && <FlatList
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
        }
        data={Recipes}
        renderItem={({item}) => {
          const bgColor = checkList.some(rec => rec.id === item.id) ? "#fecbc2" :  "#feeae9"; 
          return (
            <TouchableHighlight
              key={item.id}
              onPress={() => { 
                const recipeObject = {id: item.id, title: item.title}
                const tempList = checkList;
                if (!checkList.some(rec => rec.id === item.id)) {
                  tempList.push(recipeObject)
                } else {
                  var ind = tempList.findIndex(rec => rec.id === item.id)
                  tempList.splice(ind, 1)
                }
                setList(tempList)
                setSelectRecipe(!selectRecipe)
                console.log(checkList)
              }}
            >
            <View style={[styles.button, {backgroundColor:bgColor}]}>
              <Text>{item.title}</Text>
            </View>
            </TouchableHighlight>
          )
        }}
        extraData={selectRecipe}
      />}
     
    </View>
  );
};


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
  },
  backgroundPage:{
    flex: 1,
    backgroundColor: "#fecbc2", 
    alignItems: 'center'

  }
});


export default RecommendScreen;
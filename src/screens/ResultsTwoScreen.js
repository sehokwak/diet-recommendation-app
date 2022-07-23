import React, {useState} from 'react';
import { View, SafeAreaView, Image, ScrollView, StyleSheet, Text, StatusBar, FlatList, TouchableOpacity, TouchableHighlight} from 'react-native';
import { useSelector } from 'react-redux';
import Accordion from 'react-native-collapsible/Accordion';
import axios from 'axios';


const ResultsTwoScreen = ({navigation}) => {
  const nickname = useSelector(state => state.nameReducer.nickname)

  const selectedList = useSelector(state => state.foodReducer.selectedList)
    
  const [activeSections, setActiveSections] = useState([]);
  const [firstTime, setFirstTime] = useState(true);
  const [instructionsList, setInstructionsList] = useState([]);


  /* api call for getting instructions for selected recipes */
  const keys = require('../../.secret/keys.json')
  const options2 = (id) => {return {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
    params: {ids: id},
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': keys['API_KEY']
    }
  }};
  
  const extractInstructions = (data) => {
    var temp = "\n Instructions: \n";
    for (let i = 0; i < data.length; i++){
      temp = temp.concat(" ", i+1, ". ", data[i]["step"], "\n\n")
    };
    return temp;
  }

  const extractIngredients = (data) => {
    var temp = "\n Ingredients: \n";
    for (let i = 0; i < data.length; i++) {
      temp = temp.concat(" ", data[i]["originalString"], "\n")
    };
    return temp;
  }

  const extractData = (data) => {
    var tempL = [];
    for (let i = 0; i < data.length; i++) {
      var instruct = "";
      if (data[i]["analyzedInstructions"][0] != null) {
        instruct = extractInstructions(data[i]["analyzedInstructions"][0]["steps"])
      } else {
        instruct = data[i]["instructions"]
      }
      tempL = tempL.concat({
        id: data[i]["id"].toString(),
        title: data[i]["title"],
        instructions2: instruct,
        image: data[i]["image"],
        ingredients: extractIngredients(data[i]["extendedIngredients"])
      });
    }
    return tempL;
  }

  const callAPI2 = (id) => {
    axios.request(options2(id))
      .then(function (response) {
        const newList = extractData(response.data);
        setInstructionsList(newList);
      }).catch(function (error) {
        console.error(error);
      })
  };
  /* end api call functions*/

  if (firstTime) {
    setFirstTime(false);
    var idString = "";
    selectedList.forEach(item => idString = idString.concat(item.id + ","))
    callAPI2(idString);
  }


  const renderHeader = (section) => {
    return (
      <View style={styles.button}>
        <Text style={styles.title_text}>{section.title}</Text>
      </View>
    )
  }

  const renderContent = (section) => {
    return (
      <ScrollView>
        <Image
          style={{ width: 350, height: 250, alignSelf: 'center'}}
          source={{uri: section.image
          }}
        />
        <Text style={styles.ingredients_text}>{section.ingredients}</Text>
        <Text style={styles.instructions_text}>{section.instructions2}</Text>
      </ScrollView>
    )
  }

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textstyle}>Hi~ {nickname}, {`\n`}              Here are your recipes !</Text>

      <Accordion
        activeSections={activeSections}
        sections={instructionsList} 
        touchableComponent={TouchableOpacity}
        expandMultiple={false}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={400}
        onChange={setSections}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe4e1", 
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f08080",
    padding: 18
  }, 
  textstyle: {
    color: "#121212", 
    fontSize: 25, 
    top: 1
  }, 
  ingredients_text:{
    color: "#db7093", 
    fontSize: 18
  }, 
  instructions_text: {
    color: "#000080", 
    fontSize: 18
  }, 
  title_text:{
    color: "#ffffff", 
    fontSize: 18
  }
});

export default ResultsTwoScreen;


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
  const options2 = (id) => {return {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk',
    params: {ids: id},
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': '85fe4b0aa1msh378a060a5f544fbp15e8edjsnc3884c1c12c4'
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
      tempL = tempL.concat({
        id: data[i]["id"].toString(),
        title: data[i]["title"],
        instructions2: extractInstructions(data[i]["analyzedInstructions"][0]["steps"]),
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
    console.log("reached");
    setFirstTime(false);
    var idString = "";
    selectedList.forEach(item => idString = idString.concat(item.id + ","))
    callAPI2(idString);
  }


  const renderHeader = (section) => {
    return (
      <View style={styles.button}>
        <Text >{section.title}</Text>
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
        <Text >{section.ingredients}</Text>
        <Text >{section.instructions2}</Text>
      </ScrollView>
    )
  }

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text >Hi {nickname}, here are your recipes !</Text>
      <Accordion
        activeSections={activeSections}
        sections={instructionsList} // API CALL ISNT WORKING PROPERLY FOR List
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
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#feeae9",
    padding: 10
  }
});

export default ResultsTwoScreen;


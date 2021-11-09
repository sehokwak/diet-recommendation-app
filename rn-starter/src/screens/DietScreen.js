import React, {useState} from 'react'; 
import { Button, FlatList, Text, StyleSheet, View, ImageBackground, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addDiet } from '../actions/actions';

 

const DietScreen = ({navigation}) => {

  const nickname = useSelector(state => state.nameReducer.nickname)

  const [checkList, setList] = useState([])
  const [selectRecipe, setSelectRecipe] = useState(false)

  const dispatch = useDispatch();  
  const submitDietList = (list) => dispatch(addDiet(list));
  

  const DIETS = [
    { id:"Pescetarian"}, 
    { id:"Lacto Vegetarian"},
    { id:"Ovo Vegetarian"},
    { id:"Vegan"},
    { id:"Vegetarian"},
  ]
  
  return (
   
    <ImageBackground 
      source={require("../../assets/page3.png")}
      style={styles.container}
      >
      <Text style={styles.titleText}> Hi {nickname} !! {`\n`} Select your diet style! </Text>

      <FlatList
        data={DIETS}
        renderItem={({item}) => {
          const bgColor = checkList.includes(item.id) ? "#fecbc2" :  "#feeae9"; 
          return (
            <TouchableHighlight
              key={item.id}
              onPress={() => { 
                const tempList = checkList;
                if (!checkList.includes(item.id)) {
                  tempList.push(item.id)
                } else {
                  var ind = tempList.indexOf(item.id)
                  tempList.splice(ind, 1)
                }
                setList(tempList)
                setSelectRecipe(!selectRecipe)
                console.log(checkList)
              }}
            >
            <View style={[styles.button_1, {backgroundColor:bgColor}]}>
              <Text style={styles.text_1}>{item.id}</Text>
            </View>
            </TouchableHighlight>
          )
        }}
        extraData={selectRecipe}
      />
 
      <Button
      title="Next"
      color="hotpink"
      onPress={() => {
        submitDietList(checkList)
        navigation.navigate('Restriction')
      }}/>

</ImageBackground> 

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#feeae9", 
    alignItems: 'center'
  },
  titleText: {
    color: "#121212", 
    fontSize: 21, 
  }, 
  button_1:{
    backgroundColor: "#e9b0ad",
    width: 200,
    height: 60, 
    borderColor: 'black', 
    borderWidth: 1
  }, 
  text_1:{
    color: "#121212",
    fontSize: 23, 
    textAlign: 'center'
  }
});


export default DietScreen;
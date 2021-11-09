import React, {useState} from 'react'; 
import { Button, ScrollView, View, ImageBackground, FlatList, Text, TouchableHighlight, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addRestr } from '../actions/actions';


const RestrictionScreen = ({navigation}) => {

  const [checkList, setList] = useState([])
  const [selectRecipe, setSelectRecipe] = useState(false)

  const nickname = useSelector(state => state.nameReducer.nickname)
  
  const dispatch = useDispatch();  
  const submitRestrictionList = (list) => dispatch(addRestr(list));
  

  const RESTRICTIONS = [
    { id:"Dairy"}, 
    { id:"Egg"},
    { id:"Gluten"},
    { id:"Peanut"},
    { id:"Sesame"},
    { id:"Seafood"},
    { id:"Shellfish"}, 
    { id:"Soy"},
    { id:"Sulfite"},
    { id:"Tree Nut"},
    { id:"Wheat"}
  ]

  return (
    <ImageBackground 
      source={require("../../assets/page3.png")}
      style={styles.container}
      >
      <Text style={styles.titleText}>Do you have any food restrictions?</Text>
      <FlatList
        data={RESTRICTIONS}
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
      onPress={() => {
        submitRestrictionList(checkList)
        navigation.navigate("Recommend")
      }}
    />
    
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
    fontSize: 20, 
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


export default RestrictionScreen;

// Page 4 
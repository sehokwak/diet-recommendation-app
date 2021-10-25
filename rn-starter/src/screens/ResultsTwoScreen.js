import React from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import { useSelector } from 'react-redux';


const ResultsTwoScreen = () => {
  const nickname = useSelector(state => state.nameReducer.nickname)
  const selectedList = useSelector(state => state.foodReducer.selectedList)
  
  return (
    <View>
      <Text>Hi {nickname}, here are your recipes !</Text>
      <FlatList
        data={selectedList}
        renderItem={({item}) =>
      <Text>{item.title}</Text>} 
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ResultsTwoScreen;


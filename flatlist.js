import React from 'react';
import {ScrollView, View, Text, StyleSheet, FlatList} from 'react-native';

const App = () => {
  const friends = [
    {friend: 1},
    {friend: 2},
    {friend: 3},
    {friend: 4},
    {friend: 5},
    {friend: 7},
  ];

  const arr = [20, 45, 32, 27, 53, 30];

  // const renderItem = ({item}) => (
  //   <>
  //     <Text>{item.id}</Text>
  //     <Text>{item.title}</Text>
  //   </>
  // <Item title={item.title} />
  // );

  const render = function (fr, age) {
    // for (let i of fr) {
    //   return <Text>{i}</Text>;
    // for (let j of age) {
    //   console.log(j);
    //   // return (
    //   //   <Text>
    //   //     Friend {i.friend} - Age {j.age}
    //   //   </Text>
    //   // );
    // }
    // }
    // console.log('hellllll');
  };

  return (
    <View>
      <FlatList
        // horizontal
        data={friends}
        // keyExtractor={item => item.title}
        renderItem={({item}) => <>{render(item.friend)}</>}
        // renderItem={({item}) => (
        //   <>
        //     <Text>
        //       Friend {item.friend} - Age {item.age}
        //     </Text>
        //     {/* <Text style={{fontSize: 30}}>{item.title}</Text> */}
        //   </>
        // )}r
        showsHorizontalScrollIndicator={false}
      />
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;

// import { StatusBar } from 'expo-status-bar';
// import { Image, ScrollView, StyleSheet, Text, View, FlatList, Button,TouchableOpacity } from 'react-native';
// import React, {useState} from 'react';

// const logo = {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   width: 40,
//   height: 40
// };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     paddingTop: 22,
// //   },
// //   item: {
// //     padding: 10,
// //     fontSize: 18,
// //     height: 44,
// //   },
// // });

// export default function App() {
//   console.log("hello")
//   let x = 90;
//   console.log("app excuted",x,x);
//   const [flexDirection, setflexDirection] = useState('column');
//   return (
//     <View style={styles.container}>
//       <Text> This is native element</Text>

//       <StatusBar style="auto" />

//       <ScrollView>
//     <Text style={{fontSize: 20}}>Scroll me plzzzz</Text>
//         <Text>hihihihiihi</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 20}}>If you like</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 20}}>Scrolling down</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 20}}>What's the best</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 20}}>Framework around?</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 20}}>React Native</Text>
//     <PreviewLayout
//       label="flexDirection"
//       values={['column', 'row', 'row-reverse', 'column-reverse']}
//       selectedValue={flexDirection}
//       setSelectedValue={setflexDirection}>
//       <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
//       <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
//     </PreviewLayout>
//   <Button title="testinng"/>
//   <View>
//   <View
//         style={{width: 50,
//           height: 50, backgroundColor: 'powderblue',
//         }}
//         />
//       <View
//         style={{
//           width: 100,
//           height: 100,
//           backgroundColor: 'skyblue',
//         }}
//         />
//       <View
//         style={{
//           width: 150,
//           height: 150,
//           backgroundColor: 'steelblue',
//         }}
//         />
//   </View>
//   <Button
//           title="Increase enthusiasm"
//           accessibilityLabel="increment"
//           // onPress={onIncrement}
//           color="blue"
//           />
//           </ScrollView>
//   <FlatList
//         data={[
//           {key: 'Devin'},
//           {key: 'Dan'},
//           {key: 'Dominic'},
//           {key: 'Jackson'},
//           {key: 'James'},
//           {key: 'Joel'},
//           {key: 'John'},
//           {key: 'Jillian'},
//           {key: 'Jimmy'},
//           {key: 'Julie'},
//         ]}
//         renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//         />
//     </View>
//   );
// }

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }) => (
//   <View style={{padding: 10, flex: 1}}>
//     <Text style={styles.label}>{label}</Text>
//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//     <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
//   </View>
// )
// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   container: {
//     flex: 1,
//     marginTop: 8,
//     backgroundColor: 'aliceblue',
//   },
//   box: {
//     width: 50,
//     height: 50,
//   },
//   row: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   button: {
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//     borderRadius: 4,
//     backgroundColor: 'oldlace',
//     alignSelf: 'flex-start',
//     marginHorizontal: '1%',
//     marginBottom: 6,
//     minWidth: '48%',
//     textAlign: 'center',
//   },
//   selected: {
//     backgroundColor: 'coral',
//     borderWidth: 0,
//   },
//   buttonLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: 'coral',
//   },
//   selectedLabel: {
//     color: 'white',
//   },
//   label: {
//     textAlign: 'center',
//     marginBottom: 10,
//     fontSize: 24,
//   },
// });
// import {
//     Image,
//     ScrollView,
//     StyleSheet,
//     Text,
//     View,
//     SafeAreaView,
//     FlatList,
//     Button,
//     TouchableOpacity,
//     TouchableWithoutFeedback,
//     TouchableHighlight,
//     TouchableNativeFeedback,
//     Alert,
//     Platform,
//     StatusBar,
//   } from "react-native";
//   import React, { useState } from "react";
//   export default function App() {
//     const [str, setStr] = useState(false);
//     const handlePress = () => setStr(!str);

// return (
// <SafeAreaView style={styles.container}>
//  <Text >Hello.......</Text>
//  {/* <Text>{'\n'}</Text> */}
//  <Button title={str ?" oh! you clicked me...!" :"[click me]"} onPress={handlePress} ></Button>
//  <Text>{'\n'}</Text>
//  <TouchableOpacity onPress={()=>console.log("image pressed")}>
//    <Image source={require("./assets/favicon.png")} style={styles.image} />
//  </TouchableOpacity>
//  <Image blurRadius={4} fadeDuration={2000} source={{height:100,width:100,uri :"https://picsum.photos/0"}} />
//  <TouchableNativeFeedback>
//     <View style={{width:100,height:100,backgroundColor:"dodggerBLue"}}><Button color="orange" title='Press me' onPress={()=>Alert.alert("Title says select the option","My Message displaying the message",[{text:"Yes",onPress:()=>console.log(true)},{text:"No",onPress:()=>console.log(false)}])} /></View>
//  </TouchableNativeFeedback>
// </SafeAreaView>
// //   <SafeAreaView style={styles.container}>
////     <View style={{backgroundColor:"dodgerblue",width:"100%",height:landscape ?"30%" : "100%"}}></View>
////  </SafeAreaView>
//     );
//   }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#feee",
//     paddingTop:Platform.OS === "android" ? StatusBar.currentHeight : 0
//     // justifyContent:"center",
//     // alignItems:"center"
//   },
//   image:{
//     height:40,
//     width:40,
//   }
// })

///////////////////Borders///////////////

// const categories = [
//     { label: "Furniture", value: 1 },
//     { label: "clothing", value: 2 },
//     { label: "cameras", value: 3 },
//   ];

//   const [category, setCategory] = useState(categories[0]);

//   <Scren>
//       {/* <Text>{firstName}</Text>
//       <TextInput
//         maxLength={5}
//         keyboardType="numeric"
//         clearButtonMode="always"
//         secureTextEntry
//         onChangeText={(text) => setFirstName(text)}
//         placeholder="First Name"
//         style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
//       /> */}
//       <AppTextInput icon="email" placeholder="user name" />
//       <AppPicker
//         selectedItem={category}
//         onSelectItem={(item) => setCategory(item)}
//         items={categories}
//         icon="apps"
//         placeholder="category"
//       />
//     </Scren>
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Button, Text } from "react-native";
import Scren from "./app/components/Scren";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Tweets = () => (
  <Scren>
    <Text>Tweets</Text>
  </Scren>
);
const TweetDetais = () => (
  <Scren>
    <Text>Tweets</Text>
  </Scren>
);

function Trail(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen name="TweetDetails" component={TweetDetais} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Trail;

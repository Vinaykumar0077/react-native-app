import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
1;
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Scren from "./app/components/Scren";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import Trail from "./Trail";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tweets = () => (
  <Scren>
    <Text>Tweets</Text>
  </Scren>
);
const TweetDetais = () => (
  <Scren>
    <Text>Tweet Details</Text>
  </Scren>
);
const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetails" component={TweetDetais} />
  </Stack.Navigator>
);

export default function App() {
  // const [firstName, setFirstName] = useState("input value seen here");

  return (
    // <View style={styles.container}>
    //   <WelcomeScreen />
    // <ViewImageScreen />
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <MessagesScreen />
    // </GestureHandlerRootView>
    //    <AppText>hello</AppText>
    // </View>
    // <WelcomeScreen />
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title="Red Jacket"
    //     subTitle="$100"
    //     image={require("./app/assets/jak.jpg")}
    //   ></Card>
    //   <Card
    //     title="furniture"
    //     subTitle="$200"
    //     image={require("./app/assets/sofa.jpg")}
    //   ></Card>
    // </View>
    // <ListingDetailsScreen />
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Scren>
    //   <ListItem
    //     title="my title"
    //     subTitle="my subtitle"
    //     ImageComponent={<Icon name="email" />}
    //   />
    //   </Scren>
    //   <AccountScreen />
    //   <ListingScreen />
    // </GestureHandlerRootView>
    // <LoginScreen />
    // <RegisterScreen />
    // <ListingEditScreen />
    // <Trail />
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

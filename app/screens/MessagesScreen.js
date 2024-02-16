import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Scren";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Naruto Uzumaki",
    description: "This is the description for first message ",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "Lucifer Morning Star",
    description:
      "This is the description for second message,This is the description for second message",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "Minato Namikaze",
    description:
      "This is the description for Third message,This is the description for Third message,This is the description for Third message",
    image: require("../assets/profile.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //delete the message from messages
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
    console.log(message);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={() => <ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.description}
            onPress={() => {
              console.log("message selected", item);
            }}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({});

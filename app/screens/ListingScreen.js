import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Scren from "../components/Scren";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: "$100",
    image: require("../assets/jak.jpg"),
  },
  {
    id: 2,
    title: "Couch in a great condition",
    price: "$400",
    image: require("../assets/sofa.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Scren style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Scren>
  );
}

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: colors.light,
  },
});

import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({
  image,
  ImageComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "400",
  },
  title: {
    fontWeight: "700",
  },
});

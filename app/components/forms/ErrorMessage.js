import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";
import colors from "../../config/colors";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

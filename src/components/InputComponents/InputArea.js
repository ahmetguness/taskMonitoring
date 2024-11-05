import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export default function InputArea({
  title,
  value,
  onChangeText,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}:</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 16,
  },
  text: {
    fontSize: 22,
    marginBottom: 4,
    color: COLORS.primaryR,
  },
  textInput: {
    borderBottomWidth: 1,
    fontSize: 18,
    padding: 8,
    color: COLORS.primaryR,
  },
});

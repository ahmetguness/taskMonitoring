import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../../theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";

export default function InformationScreen() {
  return (
    <LinearGradient
      colors={[COLORS.primaryL, COLORS.primaryR]}
      style={styles.root}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.innerContainer}></View>
    </LinearGradient>
  );
}

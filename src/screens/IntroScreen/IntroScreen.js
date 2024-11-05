import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function IntroScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="NEXT"
        onPress={() => navigation.navigate("SelectionScreen")}
      />
    </View>
  );
}

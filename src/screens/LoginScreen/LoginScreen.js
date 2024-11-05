import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function LoginScreen() {
  const userType = useSelector((state) => state.appSlice.userType);
  console.log(userType);

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
}

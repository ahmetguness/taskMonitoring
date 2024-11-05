import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateUserType } from "../../redux/Slices/AppSlice";
import { styles } from "./styles";
import { COLORS } from "../../theme/colors";

export default function SelectionScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePress = (userType) => {
    dispatch(updateUserType(userType));
    navigation.navigate("LoginScreen");
  };

  const renderButton = (userType, backgroundColor, textColor) => (
    <TouchableOpacity
      style={[styles.innerContainer, { backgroundColor }]}
      onPress={() => handlePress(userType)}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {userType.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      {renderButton("parent", COLORS.primaryL, COLORS.primaryR)}
      {renderButton("child", COLORS.primaryR, COLORS.primaryL)}
    </View>
  );
}

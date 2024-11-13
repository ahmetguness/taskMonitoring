import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateUserType } from "../../redux/Slices/AppSlice";
import { styles } from "./styles";
import { COLORS } from "../../theme/colors";

const SelectionScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleUserTypeSelection = (userType) => {
    dispatch(updateUserType(userType));
    navigation.navigate("LoginScreen");
  };

  const renderSelectionButton = (userType, backgroundColor, textColor) => (
    <TouchableOpacity
      style={[styles.innerContainer, { backgroundColor }]}
      onPress={() => handleUserTypeSelection(userType)}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {userType.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.root}>
      {renderSelectionButton("parent", COLORS.primaryL, COLORS.primaryR)}
      {renderSelectionButton("child", COLORS.primaryR, COLORS.primaryL)}
    </View>
  );
};

export default SelectionScreen;

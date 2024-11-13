import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import GuestHome from "./UserTypes/GuestHome";
import ParentHome from "./UserTypes/ParentHome";
import ChildHome from "./UserTypes/ChildHome";

const HomeScreen = () => {
  const { userType } = useSelector((state) => state.appSlice);

  const renderHomeComponent = () => {
    switch (userType) {
      case "parent":
        return <ParentHome />;
      case "child":
        return <ChildHome />;
      default:
        return <GuestHome />;
    }
  };

  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      {renderHomeComponent()}
    </View>
  );
};

export default HomeScreen;

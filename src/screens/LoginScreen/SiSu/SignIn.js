import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputArea from "../../../components/InputComponents/InputArea";
import LGButton from "../../../components/buttons/LGButton";
import { styles } from "../styles";
import { useDispatch } from "react-redux";
import { updateLoginScreen } from "../../../redux/Slices/AppSlice";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatcher = useDispatch();
  const navigation = useNavigation();

  const signInHandler = () => {
    console.log(userName, password);
    navigation.navigate("HomeScreen");
  };

  return (
    <>
      <InputArea
        title="User Name"
        value={userName}
        onChangeText={setUserName}
      />
      <InputArea
        title="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <LGButton
        title="Sign In"
        style={styles.lgBtn}
        onPress={() => signInHandler()}
      />
      <TouchableOpacity
        style={styles.signUpContainer}
        activeOpacity={0.6}
        onPress={() => dispatcher(updateLoginScreen("signUp"))}
      >
        <Text style={[styles.text3, { color: "gray" }]}>
          Don't have account?
        </Text>
        <Text style={styles.text3}>Sign up</Text>
      </TouchableOpacity>
    </>
  );
}

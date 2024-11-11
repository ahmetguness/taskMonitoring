import { Text, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLoginScreen } from "../../../redux/Slices/AppSlice";
import InputArea from "../../../components/InputComponents/InputArea";
import LGButton from "../../../components/buttons/LGButton";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const dispatcher = useDispatch();
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password === confirmPassword;

  const signUpHandler = () => {
    navigation.navigate("InformationScreen");
    dispatcher(updateLoginScreen("signIn"));
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
      <InputArea
        title="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={{ alignItems: "center", width: "100%" }}>
        {!passwordsMatch && (
          <Text style={{ color: "red" }}>Passwords do not match</Text>
        )}
      </View>
      <LGButton
        title="Sign Up"
        style={[
          styles.lgBtn,
          { backgroundColor: passwordsMatch ? "#4CAF50" : "#ccc" },
        ]}
        onPress={() => {
          if (passwordsMatch) {
            signUpHandler();
          }
        }}
        disabled={!passwordsMatch}
      />
    </>
  );
}

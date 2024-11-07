import { Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import InputArea from "../../../components/InputComponents/InputArea";
import LGButton from "../../../components/buttons/LGButton";
import { styles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { updateLoginScreen } from "../../../redux/Slices/AppSlice";
import { useNavigation } from "@react-navigation/native";
import { authenticateUser } from "../../../services/firebaseServices";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const userType = useSelector((state) => state.appSlice.userType);

  const signInHandler = async () => {
    try {
      const userKind = userType;
      const result = await authenticateUser(userKind, userName, password);

      if (result.isValid) {
        console.log("Login successful:", result.userInfo);
        navigation.navigate("HomeScreen");
      } else {
        Alert.alert("Login Failed", "Invalid username or password");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      Alert.alert("Error", "An error occurred during login.");
    }
    setUserName("");
    setPassword("");
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
      <TouchableOpacity
        style={styles.cwli}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.cwliText}>Continue as Guest</Text>
        <Text style={[styles.cwliText, { fontSize: 12 }]}>
          (Single Device Only)
        </Text>
      </TouchableOpacity>

      <LGButton title="Sign In" style={styles.lgBtn} onPress={signInHandler} />
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

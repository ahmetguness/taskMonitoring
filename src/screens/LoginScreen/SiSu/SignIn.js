import React, { useState } from "react";
import { Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import InputArea from "../../../components/InputComponents/InputArea";
import LGButton from "../../../components/buttons/LGButton";
import { styles } from "../styles";
import {
  updateLoginScreen,
  updateUserType,
} from "../../../redux/Slices/AppSlice";
import { authenticateUser } from "../../../services/firebaseServices";
import { updateUserInfo } from "../../../redux/Slices/UserSlice";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userType = useSelector((state) => state.appSlice.userType);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await authenticateUser(userType, userName, password);

      if (result.isValid) {
        dispatch(updateUserInfo(result.userInfo));
        navigation.navigate("HomeScreen");
      } else {
        Alert.alert("Login Failed", "Invalid username or password");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      Alert.alert("Error", "An error occurred during login.");
    } finally {
      setIsLoading(false);
      setUserName("");
      setPassword("");
    }
  };

  const handleGuestAccess = () => {
    dispatch(updateUserType("guest"));
    navigation.navigate("HomeScreen");
  };

  const navigateToSignUp = () => dispatch(updateLoginScreen("signUp"));

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

      {userType === "parent" && (
        <TouchableOpacity style={styles.cwli} onPress={handleGuestAccess}>
          <Text style={styles.cwliText}>Continue as Guest</Text>
          <Text style={[styles.cwliText, { fontSize: 12 }]}>
            (Single Device Only)
          </Text>
        </TouchableOpacity>
      )}

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loadingIndicator}
        />
      ) : (
        <LGButton title="Sign In" style={styles.lgBtn} onPress={handleSignIn} />
      )}

      <TouchableOpacity
        style={styles.signUpContainer}
        activeOpacity={0.6}
        onPress={navigateToSignUp}
      >
        <Text style={[styles.text3, { color: "gray" }]}>
          Don't have an account?
        </Text>
        <Text style={styles.text3}>Sign up</Text>
      </TouchableOpacity>
    </>
  );
};

export default SignIn;

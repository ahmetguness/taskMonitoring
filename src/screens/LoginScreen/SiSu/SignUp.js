import React, { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import InputArea from "../../../components/InputComponents/InputArea";
import LGButton from "../../../components/buttons/LGButton";
import { styles } from "../styles";
import { updateLoginScreen } from "../../../redux/Slices/AppSlice";
import { registerUser } from "../../../services/firebaseServices";
import { updateUserInfo } from "../../../redux/Slices/UserSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userType = useSelector((state) => state.appSlice.userType);
  const passwordsMatch = password === confirmPassword;

  const handleSignUp = async () => {
    if (!passwordsMatch) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser(userType, userName, password);
      if (response.isSuccess) {
        dispatch(updateUserInfo(response.userInfo));
        navigation.navigate("HomeScreen");
        dispatch(updateLoginScreen("signIn"));
      } else {
        setErrorMessage(response.errorMessage || "Error during registration");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
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
        {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
        {loading && <ActivityIndicator size="large" color="#4CAF50" />}
      </View>

      {!loading && (
        <LGButton
          title="Sign Up"
          style={[
            styles.lgBtn,
            { backgroundColor: passwordsMatch ? "#4CAF50" : "#ccc" },
          ]}
          onPress={handleSignUp}
          disabled={!passwordsMatch}
        />
      )}
    </>
  );
};

export default SignUp;

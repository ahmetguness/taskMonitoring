import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme/colors";
import { styles } from "./styles";
import SignIn from "./SiSu/SignIn";
import SignUp from "./SiSu/SignUp";

export default function LoginScreen() {
  const appSlice = useSelector((state) => state.appSlice);

  const LoginScreenComponent =
    appSlice.loginScreen === "signIn" ? <SignIn /> : <SignUp />;

  const title =
    appSlice.loginScreen === "signIn" ? ["Sign in", "as"] : ["Sign Up", "as"];

  return (
    <LinearGradient
      style={styles.root}
      colors={[COLORS.primaryL, COLORS.primaryR]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text1}>{title[0]}</Text>
        <Text style={styles.text2}>
          {title[1]} {appSlice.userType.toUpperCase()}
        </Text>
      </View>
      <View style={styles.footer}>{LoginScreenComponent}</View>
    </LinearGradient>
  );
}

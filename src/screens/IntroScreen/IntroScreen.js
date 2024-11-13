import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";

const IntroScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="NEXT"
        onPress={() => navigation.navigate("SelectionScreen")}
      />
    </View>
  );
};

export default IntroScreen;

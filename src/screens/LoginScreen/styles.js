import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/colors";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  textContainer: {
    height: "28%",
    justifyContent: "center",
    marginLeft: "10%",
  },
  text1: {
    fontSize: 60,
    color: "white",
  },
  text2: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: "20%",
    color: COLORS.white,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "72%",
    backgroundColor: COLORS.white,
    justifyContent: "space-evenly",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingVertical: "10%",
  },
  lgBtn: {
    width: "50%",
    marginHorizontal: "25%",
    height: "8%",
    marginBottom: "5%",
  },
  signUpContainer: {
    position: "absolute",
    right: "4%",
    bottom: "4%",
    alignItems: "center",
    justifyContent: "center",
  },
  text3: {
    fontSize: 18,
    color: COLORS.primaryR,
  },
  cwli: {
    width: "100%",
    alignItems: "center",
  },
  cwliText: {
    fontSize: 16,
    color: COLORS.primaryR,
  },
});

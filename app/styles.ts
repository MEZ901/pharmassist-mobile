import { StyleSheet } from "react-native";

export const WelcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a69d",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#38a69d",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#a1a1a1",
  },
  button: {
    position: "absolute",
    backgroundColor: "#38a69d",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export const NotFoundStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    elevation: 9,
    borderRadius: 10,
    alignContent: "center",
    shadowOffset: {
      height: 9,
      width: 0,
    },
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  avatar: {
    width: 70,
    height: 70,

    borderRadius: 50,
  },

  header: {
    flexDirection: "row",
    paddingLeft: 15,
  },

  social: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },

  texts: {
    flex: 1,
    paddingLeft: 15,
  },
});

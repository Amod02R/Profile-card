import { Alert, Linking, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";

export default function App() {
  const [countClick, setCountClick] = useState(0);
  function hello(name) {
    Alert.alert("Hello" + name);
    setCountClick(countClick + 1);
  }

  function goToSocialMedia(socialMedia) {
    switch (socialMedia) {
      case "twitter":
        url = "";
        break;
      case "github":
        url = "https://github.com/Amod02R";
        break;
      case "linkdn":
        url = "https://www.linkedin.com/in/amod-parab-45a390187";
        break;
    }
    Linking.openURL(url);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileCard
          firstName="Amod"
          lastName="Parab"
          age={23}
          isOpenToWork={true}
          onPressTitle={hello}
          onPressLinks={goToSocialMedia}
        />
        <Text style={{ fontSize: 18 }}>
          You clicked {countClick} times on the title.
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,

    justifyContent: "center",
  },
});

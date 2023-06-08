import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";


export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
        return null;
    }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/background_img.jpg')}
        resizeMode="cover"
         style={styles.image}
      />
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
       <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
   image: {
        position: "absolute",
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
});

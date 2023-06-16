import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import CreatePostsScreen from './screens/CreatePostsScreen';
import CommentsScreen from './screens/CommentsScreen';
import Home from './screens/Home';

const MainStack = createStackNavigator();

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
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
          <MainStack.Screen
                        options={{ headerShown: false }}
                        name="Home"
                        component={Home}
                    />
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          />
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Posts"
            component={PostsScreen}
          />
          {/* <MainStack.Screen
            options={{ headerShown: false }}
            name="Create Post"
            component={CreatePostsScreen}
          /> */}
          <MainStack.Screen
            options={{ headerShown: false }}
            name="Coments"
            component={CommentsScreen}
          />
          {/* <MainStack.Screen
            options={{ headerShown: false }}
            name="Profile"
            component={ProfileScreen}
          /> */}
          <MainStack.Screen name="Map" component={MapScreen} />
          </MainStack.Navigator>
        </NavigationContainer>
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

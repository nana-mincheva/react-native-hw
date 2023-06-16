import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, StyleSheet, ImageBackground } from "react-native";
import InputComponent from "../components/InputComponent";
const backImage = require('../assets/images/background_img.jpg');

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <ImageBackground source={backImage} style={styles.backImg}>
        <View style={styles.loginContainer}>
                <Text style={styles.loginFormHeader}>Увійти</Text>
            <KeyboardAvoidingView behavior={Platform.OS == "android" ? "padding" : "height"}>
            <View style={styles.loginForm}>
                <InputComponent
                    placeholder={"Адреса електронної пошти"}
                    type={"email"}
                    name={"email"}
                    value={email}
                    onChangeText={setEmail}
                />

                <View style={{ position: "relative" }}>
                    <InputComponent
                        placeholder={"Пароль"}
                        type={"password"}
                        name={"password"}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 16,
                            top: 16,
                        }}
                        onPress={togglePasswordVisibility}
                    >
                        <Text style={{ color: "#1B4371" }}>
                            {showPassword ? "Приховати" : "Показати"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.loginFormSubmitButton}
            >
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: "center",
                        color: "#ffffff",
                    }}
                >
                    Увійти
                </Text>
                </TouchableOpacity>
                
            <View style={styles.toRegistrationWrapper} activeOpacity={0.7}>
                <Text style={styles.textLink}>Немає акаунту?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={[styles.textLink, styles.link]}>
                    Зареєструватися
                  </Text>
                </TouchableOpacity>
              </View>

                </View>
                </ImageBackground>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        width: "100%",
        height: "60%",
        marginTop: "auto",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: "flex",
        paddingLeft: 16,
        paddingRight: 16,
    },
    backImg: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%'
  },
    loginForm: {
        display: "flex",
        gap: 16,
        marginBottom: 40,
    },
    loginFormHeader: {
        marginTop: 32,
        marginBottom: 32,
        fontFamily: "Roboto-Bold",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
    },
    loginFormSubmitButton: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
    },
    toRegistrationWrapper: {
         display: "flex",
        flexDirection: "row",
        gap: 4,
        justifyContent: 'center',
    
  },
    textLink: {
       fontFamily: "Roboto",
       fontWeight: 400,
       fontSize: 16,
       lineHeight: 19,
       textAlign: "center",
       color: "#1B4371",
  },
  link: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
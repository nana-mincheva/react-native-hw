import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet,  KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, ImageBackground} from "react-native";
import * as ImagePicker from "expo-image-picker";
import RegisterAddButton from "../components/RegisterAddButton";
import RegisterRemoveButton from "../components/RegisterRemoveButton";
import InputComponent from "../components/InputComponent";
const backImage = require('../assets/images/background_img.jpg');


const RegistrationScreen = ({ navigation }) => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [userAvatar, setUserAavatar] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRemoveImage = () => {
        setUserAavatar(null);
    };

    const uploadAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        console.log(result.assets[0].uri);

        if (!result.canceled) setUserAavatar(result.assets[0].uri);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground source={backImage} style={styles.backImg}>
        <View style={styles.registerContainer}>
            <View style={styles.userImageContainer}>
                {userAvatar && (
                    <Image
                        source={{ uri: userAvatar }}
                        style={{ width: 120, height: 120, borderRadius: 16 }}
                    />
                )}
                {!userAvatar ? (
                    <RegisterAddButton
                        onPress={uploadAvatar}
                    ></RegisterAddButton>
                ) : (
                    <RegisterRemoveButton
                        onPress={handleRemoveImage}
                    ></RegisterRemoveButton>
                )}
            </View>
                <Text style={styles.registerFormHeader}>Реєстрація</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "android" ? "padding" : "height"}
                >
            <View style={styles.registerForm}>
                <InputComponent
                    placeholder={"Логін"}
                    type={"text"}
                    name={"login"}
                    value={login}
                    onChangeText={setLogin}
                />
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
                style={styles.registerFormSubmitButton}
                title="Зареєструватися"
            >
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: "center",
                        color: "#ffffff",
                    }}
                >
                    Зареєструватися
                </Text>
            </TouchableOpacity>
             <View style={styles.toLoginWrapper} activeOpacity={0.7}>
                <Text style={styles.textLink}>Вже є акаунт?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.textLink}>Увійти</Text>
                </TouchableOpacity>
              </View>
                </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    registerContainer: {
        width: "100%",
        height: "70%",
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
    userImageContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    registerForm: {
        display: "flex",
        gap: 16,
        marginBottom: 40,
    },
    registerFormHeader: {
        margin: 0,
        padding: 0,
        marginBottom: 32,
        fontFamily: "Roboto-Bold",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
    },
    registerFormSubmitButton: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
    },
     toLoginWrapper: {
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
       color: "#1B4371",
  },
});

export default RegistrationScreen;
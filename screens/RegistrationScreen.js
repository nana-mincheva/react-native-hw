import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet} from "react-native";
import * as ImagePicker from "expo-image-picker";
import RegisterAddButton from "../components/RegisterAddButton";
import RegisterRemoveButton from "../components/RegisterRemoveButton";
import InputComponent from "../components/InputComponent";

const RegistrationScreen = () => {
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

    const handleSubmitButtonPress = () => {
        console.log(login, email, password);
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
        <View style={styles.registrationContainer}>
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

            <Text style={styles.registrationFormHeader}>Реєстрація</Text>

            <View style={styles.registrationForm}>
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

            <TouchableOpacity
                onPress={handleSubmitButtonPress}
                style={styles.registrationFormSubmitButton}
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
            <TouchableOpacity>
                <Text
                    style={{
                        fontSize: 16,
                        color: "#1B4371",
                        textAlign: "center",
                    }}
                >
                    Вже є акаунт? Увійти
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
     registrationContainer: {
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
    userImageContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        top: -60,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    registrationForm: {
        display: "flex",
        gap: 16,
        marginBottom: 40,
    },
    registrationFormHeader: {
        margin: 0,
        padding: 0,
        marginBottom: 32,
        fontFamily: "Roboto-Bold",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
    },
    registrationFormSubmitButton: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        padding: 16,
        borderRadius: 100,
        backgroundColor: "#FF6C00",
    },
})
export default RegistrationScreen;
import React, { useState } from "react";
import { View, Image, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";
import * as ImagePicker from "expo-image-picker";
import RegisterAddButton from "../components/RegisterAddButton";
import RegisterRemoveButton from "../components/RegisterRemoveButton";
import LogoutButton from "../components/LogoutButton";
import PostComponent from "../components/PostComponent";
const backImage = require('../assets/images/background_img.jpg');

const ProfileScreen = () => {
    const [login, setLogin] = useState("Natali Romanova");
    const [userAvatar, setUserAavatar] = useState(userAvatar);

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

        if (!result.canceled) setUserAavatar(result.assets[0].uri);
    };

    const posts = [
        {
            img: "https://images.nationalgeographic.org/image/upload/v1638892272/EducationHub/photos/hoh-river-valley.jpg",
            description: "123",
            coments: 0,
            likes: 50,
            location: "Ukraine",
        },
        {
            img: "https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_3x2.jpg",
            description: "456",
            coments: 84,
            likes: 58,
            location: "Ukraine",
        },
        {
            img: "https://www.travelandleisure.com/thmb/PtkzpF17oxHfxuTbsnUx7oJY20A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-tahoe-california-USLAKES0920-59df9ea26eaf4bbba7620eb604f0af3c.jpg",
            description: "789",
            coments: 0,
            likes: 56,
            location: "Ukraine",
        },
        {
            img: "https://www.eurac.edu/_next/image?url=https%3A%2F%2Fwebassets.eurac.edu%2F31538%2F1647583511-adobestock_490465800.jpeg%3Fw%3D980%26h%3D588%26fit%3Dcrop%26crop%3Dfocalpoint%26fp-x%3Dundefined%26fp-y%3Dundefined%26auto%3Dformat%26dpr%3D1.5&w=2048&q=85",
            description: "012",
            coments: 3,
            likes: 76,
            location: "Ukraine",
        },
    ];
    const post = posts[1];

    return (
        <ImageBackground source={backImage} style={styles.backImg}>
            <View style={styles.profileContainer}>
                <View style={styles.profileLogoutButton}>
                    <LogoutButton />
                </View>

                <View style={styles.userImageContainer}>
                    {userAvatar && (
                        <Image
                            source={{ uri: userAvatar }}
                            style={{
                                width: 120,
                                height: 120,
                                borderRadius: 16,
                            }}
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

                <Text style={styles.profileHeader}>{login}</Text>
                <ScrollView
                    style={{ margin: 0, padding: 0 }}
                    showsVerticalScrollIndicator={false}
                >
                    {posts.map(({ img, description, likes, coments, location }) => {
                        return (
                            <PostComponent
                                key={description}
                                image={img}
                                description={description}
                                likes={likes}
                                comments={coments}
                                location={location}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        position: "relative",
        width: "100%",
        height: "76%",
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
    profileLogoutButton: {
        position: "absolute",
        top: 60,
        right: 16,
    },
    profileHeader: {
        margin: 0,
        padding: 0,
        marginBottom: 32,
        fontFamily: "Roboto-Bold",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35,
        textAlign: "center",
    },
});

export default ProfileScreen;
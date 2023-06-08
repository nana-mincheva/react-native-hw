import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

const AuthUserInfo = () => {
    return (
        <View style={styles.userContainer}>
            <Image
                source={require("../assets/images/user_img.jpg")}
                style={{ width: 60, height: 60, borderRadius: 16 }}
            />
            <View>
                <Text style={{ fontSize: 13, fontWeight: 700 }}>
                    Natali Romanova
                </Text>
                <Text style={{ fontSize: 11, fontWeight: 400 }}>
                    natali.romanova@gmail.com
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
     userContainer: {
        height: 60,
        marginTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
    },
})

export default AuthUserInfo;
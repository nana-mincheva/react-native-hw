import { View, Text, StyleSheet } from "react-native";
import LogoutButton from "../components/LogoutButton";
import AuthUserInfo from "../components/AuthUserInfo";
import AppControls from "../components/AppControls";

const PostsScreen = () => {
     const handleLogoutPress = () => {
        console.log("Logout");
    };
    return (
        <View style={styles.postsContainer}>
            <View style={styles.postsHeaderContainer}>
                <Text style={styles.postsHeader}>Публікації</Text>
                <LogoutButton onPress={handleLogoutPress}></LogoutButton>
            </View>
            <AuthUserInfo />
            <AppControls />
        </View>
    );
};
const styles = StyleSheet.create({
     postsContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
    },
    postsHeaderContainer: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        height: 90,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 12,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderBottomWidth: 1,
    },
     postsHeader: {
        marginLeft: "auto",
        marginRight: "auto",
        fontWeight: 500,
        fontSize: 17,
    },
 })
export default PostsScreen;
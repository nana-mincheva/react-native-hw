import { View, Text, Image, StyleSheet } from "react-native";

const CommentComponent = ({ user, text, date, userIcon }) => {
    return (
        <View
            style={[
                styles.commentContainer,
                user === "owner" ? { flexDirection: "row-reverse" } : {},
            ]}
        >
            <Image source={userIcon} style={styles.userIcon} />
            <View
                style={[
                    styles.comment,
                    user === "owner"
                        ? { borderTopEndRadius: 0, borderTopLeftRadius: 6 }
                        : {},
                ]}
            >
                <Text style={styles.text}>{text}</Text>
                <Text
                    style={[
                        styles.date,
                        user === "owner"
                            ? { marginRight: "auto", marginLeft: 0 }
                            : {},
                    ]}
                >
                    {date}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    commentContainer: {
        marginBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        minWidth: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 16,
    },
    userIcon: {
        width: 28,
        height: 28,
        borderRadius: 50,
        backgroundColor: "gray",
    },
    comment: {
        maxWidth: 315,
        padding: 16,
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderBottomEndRadius: 6,
        borderBottomLeftRadius: 6,
        borderTopEndRadius: 6,
    },
    text: {
        marginBottom: 8,
        fontSize: 13,
        lineHeight: 16,
        color: "#212121",
    },
    date: {
        marginLeft: "auto",
        fontSize: 10,
        color: "#BDBDBD",
    },
});

export default CommentComponent;
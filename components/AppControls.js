import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Svg, Path, Rect } from "react-native-svg";

const AppControls = () => {
    return (
        <View style={styles.appContainer}>
            <TouchableOpacity>
                <Svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Rect width="24" height="24" fill="white" />
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 3H10V10H3V3Z"
                        stroke="#212121"
                        stroke-opacity="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 3H21V10H14V3Z"
                        stroke="#212121"
                        stroke-opacity="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 14H21V21H14V14Z"
                        stroke="#212121"
                        stroke-opacity="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 14H10V21H3V14Z"
                        stroke="#212121"
                        stroke-opacity="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
                <Svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
                        fill="white"
                    />
                </Svg>
            </TouchableOpacity>
            <TouchableOpacity>
                <Svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
                        stroke="#212121"
                        stroke-opacity="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                        stroke="#212121"
                        stroke-opacity="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </Svg>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
     appContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
        alignItems: "center",
        width: "100%",
        height: 90,
        marginTop: "auto",
        paddingLeft: 16,
        paddingRight: 16,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderTopWidth: 1,
    },

    addButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 70,
        height: 40,
        backgroundColor: "#FF6C00",
        borderRadius: 20,
    },
})

export default AppControls;
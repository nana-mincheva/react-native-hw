import React from "react";
import { Svg, Path } from "react-native-svg";
import { TouchableOpacity, StyleSheet } from "react-native";

const ReturnButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.returnButton} onPress={onPress}>
            <Svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M20 12H4"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <Path
                    d="M10 18L4 12L10 6"
                    stroke="#212121"
                    stroke-opacity="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </Svg>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    returnButton: {
        position: "absolute",
        left: 16,
        bottom: 11,
    },
});

export default ReturnButton;
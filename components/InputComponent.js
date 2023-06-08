import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

const InputComponent = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <TextInput
            style={[styles.textInput, isFocused && styles.focusedTextInput]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
           
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: "100%",
        height: 50,
        padding: 16,
        backgroundColor: "#F6F6F6",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#E8E8E8",
    },
    focusedTextInput: {
        borderColor: "#FF6C00",
    },
})

export default InputComponent;
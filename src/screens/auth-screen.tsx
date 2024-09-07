import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";

const AuthScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(email, password)
    }

    return (<>
        <View style={styles.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.inputStyle} />
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.inputStyle} />
            <TouchableOpacity onPress={handleLogin} style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
        </View>
    </>)
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    inputStyle: {
        margin: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 5,
        paddingBottom: 5
    },
    buttonTextStyle: {
        color: "#ffffff",
        fontWeight: "700",
        textAlign: "center",
    },
    buttonStyle: {
        width: 120,
        marginTop: 15,
        backgroundColor: "#288ff7",
        borderRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: "#ffffff",
        fontWeight: "700",
    },
})
export default AuthScreen;
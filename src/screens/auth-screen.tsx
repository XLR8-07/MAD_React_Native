import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface IUserState {
    isLoggedIn: boolean
    user: IUser
}

interface IUser {
    email: string
    token: string
    img_url: string
}

const AuthScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [userData, setUserData] = useState<IUserState>()

    const handleLogin = () => {
        if (email == "abc@gmail.com" && password == "abc1234") {
            const user: IUser = {
                email: 'abc@gmail.com',
                token: 'eBibfvisbnoinw',
                img_url: ""
            }
            setUserData({ isLoggedIn: true, user: user })
        }
    }

    return (<>
        <View style={styles.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.inputStyle} />
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.inputStyle} />
            <TouchableOpacity onPress={handleLogin} style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            {userData?.isLoggedIn ? <Text>Logged In Successfully</Text> : <></>}
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
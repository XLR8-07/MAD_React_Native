import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { getNationality } from "../services/dashboard-service";

export interface IUserState {
    isLoggedIn: boolean
    user: IUser
}

export interface IUser {
    first_name: string
    last_name: string
    email: string
    city: string
    country: string
}

const AuthScreen = (props: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [userData, setUserData] = useState<IUserState>()

    const handleLogin = async () => {
        if (email == "abc@gmail.com" && password == "abc1234") {
            const user: IUser = {
                first_name: '',
                last_name: '',
                email: '',
                city: '',
                country: ''
            }
            setUserData({ isLoggedIn: true, user: user })
        }
        const country = await getNationality("miyazaki")

        console.log("Get Awaited Nationality of Miyazaki", country.data)

    }

    const handleRegister = () => {
        props.navigation.navigate("Register", setUserData)
    }

    return (<>
        <View style={styles.container}>
            <TextInput placeholder="Email" onChangeText={setEmail} value={email} style={styles.inputStyle} />
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.inputStyle} />
            <TouchableOpacity onPress={handleLogin} style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>Login</Text>
            </TouchableOpacity>
            {userData?.isLoggedIn ? <Text>Logged In Successfully</Text> : <></>}
            <Text>Don't Have an Account? <Text style={styles.hyperLinkText} onPress={handleRegister}>Register Now!</Text></Text>
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
    hyperLinkText:
    {
        textDecorationLine: 'underline',
        color: 'blue',
        cursor: 'pointer'
    }
})
export default AuthScreen;
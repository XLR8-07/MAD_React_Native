import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const CounterScreen = () => {
    const [counter, setCounter] = useState(5);

    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    const handleDecrease = () => {
        setCounter(counter - 1)

    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.counterTextStyle}>{counter}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleIncrease} style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Increase</Text>
                </TouchableOpacity>
                <span style={styles.buttonGap}></span>
                <TouchableOpacity onPress={handleDecrease} style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Decrease</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer:
    {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    buttonStyle: {
        marginTop: 15,
        backgroundColor: "#288ff7",
        borderRadius: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#ffffff",
        fontWeight: '700'
    },
    buttonTextStyle:
    {
        color: "#ffffff",
        fontWeight: '700'
    },
    counterTextStyle:
    {
        fontSize: 38,
        fontWeight: '700',
        color: '#fc4830'
    },
    buttonGap:
    {
        marginLeft: 5,
        marginRight: 5
    }
})

export default CounterScreen;
import { StyleSheet, View, Text } from "react-native";

const TestComponent = () => {
    return (
        <View style={style.componentContainer}>
            <Text style={style.textStyle}>ASHIQ</Text>
        </View>
    )
}
const style = StyleSheet.create({
    componentContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 50,
        fontWeight: 700,
        color: 'red'
    }
})

export default TestComponent;
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ExamComponent = (props: any) => {
  const [counter, setCounter] = useState(0);
  const [topLeft, setTopLeft] = useState("");
  const [topRight, setTopRight] = useState("");
  const [bottomLeft, setBottomLeft] = useState("");
  const [bottomRight, setBottomRight] = useState("");

  const handleTopLeft = () => {
    setTopLeft(`Value changed for ${counter}th Time`);
    setCounter(counter + 1);
  };

  const handleTopRight = () => {
    setTopRight(`Value changed for ${counter}th Time`);
    setCounter(counter + 1);
  };

  const handleBottomLeft = () => {
    setBottomLeft(`Value changed for ${counter}th Time`);
    setCounter(counter + 1);
  };

  const handleBottomRight = () => {
    setBottomRight(`Value changed for ${counter}th Time`);
    setCounter(counter + 1);
  };

  const handleCounterScreenButton = () => {
    props.navigation.navigate("Counter")
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text>{topLeft}</Text>
          <TouchableOpacity onPress={handleTopLeft} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>TopLeft</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>{topRight}</Text>
          <TouchableOpacity onPress={handleTopRight} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>TopRight</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.rowContainer}>
          <Text>{bottomLeft}</Text>
          <TouchableOpacity
            onPress={handleBottomLeft}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>BottomLeft</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text>{bottomRight}</Text>
          <TouchableOpacity
            onPress={handleBottomRight}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>BottomRight</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.navigationButtonContainer}>
        <TouchableOpacity
          onPress={handleCounterScreenButton}
          style={styles.navButtonStyle}
        >
          <Text style={styles.buttonTextStyle}>Counter Screen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  rowContainer: {
    width: "50%",
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
  navigationButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButtonStyle: {
    width: 120,
    marginTop: 15,
    backgroundColor: "#ff8d36",
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#ffffff",
    fontWeight: "700",
  },
});

export default ExamComponent;

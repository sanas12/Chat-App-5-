import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const backgroundColors = ["#090C08", "#474056", "#8A95A5", "#B9C6AE"];

  return (
    <ImageBackground
      source={require("../img/background-img.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Chat App</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Type your username here"
        />
        <Text style={styles.colorText}>Choose Background Color:</Text>
        <View style={styles.colorContainer}>
          {backgroundColors.map((color) => (
            <TouchableOpacity
              key={color}
              style={[styles.colorOption, { backgroundColor: color }]}
              onPress={() => setBgColor(color)}
            />
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Chat", { name, bgColor })}
        >
          <Text style={styles.buttonText}>Enter Chat</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "88%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  textInput: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginTop: 15,
    marginBottom: 15,
  },
  colorText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#757083",
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Start;

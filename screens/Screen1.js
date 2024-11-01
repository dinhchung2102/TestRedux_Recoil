import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
export default function Screen1({ navigation }) {
  const [nameUser, setNameUser] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require("../assets/background.png")} />
      <View style={styles.textView}>
        <Text style={styles.text}>MANAGE YOUR</Text>
        <Text style={styles.text}>TASK</Text>
      </View>
      <View style={styles.inputView}>
        <AntDesign name="mail" size={30} style={styles.mailicon} />

        <TextInput
          value={nameUser}
          onChangeText={setNameUser}
          placeholder="Enter your name"
          style={styles.inputName}
        />
      </View>
      <View style={styles.viewButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen2", {
              nameUser: nameUser,
            });
          }}
        >
          <Text style={styles.textButton}>GET STARTED</Text>
          <AntDesign name="arrowright" size={30} color={"white"} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  textView: {
    marginTop: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8353E2",
    textAlign: "center",
  },
  inputView: {
    flexDirection: "row",
    marginTop: 50,
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#C4C4C4",
    alignItems: "center",
  },
  mailicon: {
    marginLeft: 12,
    marginRight: 10,
  },
  inputName: {
    fontSize: 20,
  },
  viewButton: {
    marginTop: 50,
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#00BDD6",
    borderRadius: 15,
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginRight: 10,
  },
});
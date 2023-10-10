import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text, Alert } from "react-native";
import { TextInput, Touchable, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  // console.log(`password`, password);

  const submit = () => {
    // return alert(userName, password);
    if (userName === "umair" && password === "aftab") {
      //   alert(`Thank You ${userName}`);
      navigation.navigate("Form", { myName: `${userName}` });
    } else {
      alert(`UserName and Password is not correct`);
    }
  };
  // let [fontLoaded, error] = useFonts({
  //   bold: "./assets/Fonts/Montserra/static/Montserrat-ExtraBold.ttf",
  //   regular: "./assets/Fonts/Josefin_Sans/static/JosefinSans-Light.ttf",
  // });
  // if (!fontLoaded) {
  //   return <h2>Loading</h2>;
  // }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach us any time via any@umair.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.lables}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setUserName(actualData)}
        />
        <Text style={styles.lables}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={(actualData) => setPassword(actualData)}
        />
      </View>
      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with this.
        </Text>
      </View>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          { backgroundColor: agree ? "#4630EB" : "grey" },
        ]}
        disabled={!agree}
        onPress={() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344050",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputContainer: {
    marginTop: 20,
  },
  lables: {
    fontSize: 18,
    marginTop: 10,
    color: "#7d7d7d",
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    marginBottom: "20px",
  },
  wrapperText: {
    marginLeft: "10px",
  },
  buttonStyle: {
    padding: "15px",
    borderRadius: "5px",
  },
  buttonText: {
    color: "white",
    fontSize: "20px",
    paddingLeft: "40%",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
});

export default Login;

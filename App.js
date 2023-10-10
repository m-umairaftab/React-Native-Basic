// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// import React from "react";
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from "react-native";

// const Separator = () => <View style={styles.separator} />;

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.title}>
//         The title and onPress handler are required. It is recommended to set
//         accessibilityLabel to help make your app usable by everyone.
//       </Text>
//       <Button title="Press me" onPress={() => alert("Simple Button pressed")} />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         Adjust the color in a way that looks standard on each platform. On iOS,
//         the color prop controls the color of the text. On Android, the color
//         adjusts the background color of the button.
//       </Text>
//       <Button
//         title="Press me"
//         color="#f194ff"
//         onPress={() => alert("Button with adjusted color pressed")}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         All interaction for the component are disabled.
//       </Text>
//       <Button
//         title="Press me"
//         disabled
//         onPress={() => alert("Cannot press this one")}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         This layout strategy lets the title define the width of the button.
//       </Text>
//       <View style={styles.fixToText}>
//         <Button
//           title="Left button"
//           onPress={() => alert("Left button pressed")}
//         />
//         <Button
//           title="Right button"
//           onPress={() => alert("Right button pressed")}
//         />
//       </View>
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default App;

// import React from "react";
// import { ActivityIndicator, StyleSheet, View } from "react-native";

// const App = () => (
//   <View style={[styles.container, styles.horizontal]}>
//     <ActivityIndicator style={styles.ab} />
//     <ActivityIndicator size={"large"} />
//     <ActivityIndicator size="small" color="#0000ff" />
//     <ActivityIndicator size="large" color="#00ff00" />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   horizontal: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//   },
//   ab: {
//     color: "#737373",
//   },
// });

// export default App;

import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text, Alert } from "react-native";
import { TextInput, Touchable, TouchableOpacity } from "react-native";
import { CheckBox } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  // console.log(`password`, password);

  const submit = () => {
    // return alert(userName, password);
    if (userName === "umair" && password === "aftab") {
      alert(`Thank You ${userName}`);
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
  },
});

export default App;

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

import React from "react";
import { View } from "react-native";
import studentLogin from "./Screens/studentLogin.js";
import StudentLogin2 from "./Screens/studentLogin2.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={studentLogin} />
        <Stack.Screen name="Form" component={StudentLogin2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

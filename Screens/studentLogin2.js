import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-web";

const StudentLogin2 = ({ route, navigation }) => {
  const { myName } = route.params;
  return (
    <View style={styles.mainContainer}>
      <text style={styles.mainHeader}>Welcome {myName}</text>
      <Button
        color="blue"
        borderRadius="5px"
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    color: "Blue",
  },
  mainHeader: {
    fontSize: 35,
    color: "Blue",
  },
});

export default StudentLogin2;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, createContext, useContext } from "react";
import ProfileContext from "./User";
// const UserContext = createContext();

const HomeScreen = ({ navigation, route, children }) => {
  // const [user, setUser] = useState("Abdul Moiz");

  const user = useContext(ProfileContext)


  return (
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        {/* <ProfileScreen /> */}
        <Text>{'Name: '+ user}</Text>
        <Button
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
        <Button
          title="go back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
  );
};
export default HomeScreen;

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useState, createContext, useContext } from "react";
// import HomeScreen from "./home";
import ProfileContext from './User';

const ProfileScreen = ({ navigation, route }) => {
  const user = useContext(ProfileContext);
alert(user)
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Text style={{ marginTop: 30}} >{ 'NAME : ' + user}</Text>
      <Text>
        <Button
          title="go back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Text>
    </View>
  );
};
export default ProfileScreen;

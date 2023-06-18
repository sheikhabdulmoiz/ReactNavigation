import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text ,Button, StyleSheet} from "react-native";

const HomeScreen = ({ navigation, route }) => {
    return (
        <View style={{justifyContent:"center", flex:1, alignItems:"center"}}>
            <Button
              title="Profile"
              onPress={() => navigation.navigate("Profile")}
            />
            <Button 
            title="go back"
            onPress={() => {navigation.goBack()}}
            />
        </View>
    );
  };
  export default HomeScreen;
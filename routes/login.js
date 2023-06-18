import React from "react";
import { View, Text ,Button, StyleSheet} from "react-native";

const LoginScreen = ({ navigation }) => {
    return (
        <View style={{justifyContent:"center", flex:1, alignItems:"center"}}>
            <Button
              title="Home"
              onPress={() => navigation.navigate("Home")}
            />
            
        </View>
    );
  };
  export default LoginScreen;
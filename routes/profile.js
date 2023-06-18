import React from "react";
import { View, Text ,Button, StyleSheet} from "react-native";

const ProfileScreen = ({ navigation, route}) => {
    return (
        <View style={{justifyContent:"center", flex:1, alignItems:"center"}}>
            <View>
                <Text
                ></Text>
            </View>
          <Text>
            <Button 
            title="go back"
            onPress={() => {navigation.goBack()}}
            />
          </Text>
        </View>
    );
  };
  export default ProfileScreen;
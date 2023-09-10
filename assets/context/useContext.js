import { useState, createContext, useContext } from "react";
import { View } from "react-native";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Abdul Moiz");

  return (
    <UserContext.Provider value={user}>
      <Text>{`Hello ${user}!`}</Text>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <View>
      <Text>Component 2</Text>
      <Component3 />
    </View>
  );
}

function Component3() {
  return (
    <View>
      <Text>Component 3</Text>
      <Component4 />
    </View>
  );
}

function Component4() {
  return (
    <View>
      <Text>Component 4</Text>
      <Component5 />
    </View>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <View>
      <Text>Component 5</Text>
      <Text>{`Hello ${user} again!`}</Text>
    </View>
  );
}

export default Component1;
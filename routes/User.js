import { useState, createContext, useContext } from "react";

const ProfileContext = createContext();

export function UserProvider(props) {
  const [user, setUser] = useState("moiz");

  return (
    <ProfileContext.Provider value={user}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext
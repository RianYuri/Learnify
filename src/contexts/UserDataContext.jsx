import { createContext, useState } from "react";

const userDataContext = createContext();
const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({ userName: "" });
  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
};

export { UserDataProvider, userDataContext };

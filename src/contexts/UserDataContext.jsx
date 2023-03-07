import { createContext, useState } from "react";

const userDataDefault = localStorage.getItem("userName")
	? {
			userName: localStorage.getItem("userName"),
	  }
	: { userName: "" };

const userDataContext = createContext();
const UserDataProvider = ({ children }) => {
	const [userData, setUserData] = useState(userDataDefault);
	return <userDataContext.Provider value={{ userData, setUserData }}>{children}</userDataContext.Provider>;
};

export { UserDataProvider, userDataContext };

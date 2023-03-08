import { createContext, useState } from "react";

const categorySelectedContext = createContext();
const CategorySelectedProvider = ({ children }) => {
	const [categorySelected, setCategorySelected] = useState(
		localStorage.getItem("categorySelected") ? JSON.parse(localStorage.getItem("categorySelected")) : {}
	);
	return (
		<categorySelectedContext.Provider value={{ categorySelected, setCategorySelected }}>
			{children}
		</categorySelectedContext.Provider>
	);
};

export { CategorySelectedProvider, categorySelectedContext };

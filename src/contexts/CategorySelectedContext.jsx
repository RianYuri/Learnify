import { createContext, useState } from "react";

const categorySelectedDefault = localStorage.getItem("categorySelected")
	? JSON.parse(localStorage.getItem("categorySelected"))
	: {};

const categorySelectedContext = createContext();
const CategorySelectedProvider = ({ children }) => {
	const [categorySelected, setCategorySelected] = useState(categorySelectedDefault);
	return (
		<categorySelectedContext.Provider value={{ categorySelected, setCategorySelected }}>
			{children}
		</categorySelectedContext.Provider>
	);
};

export { CategorySelectedProvider, categorySelectedContext };

import { createContext, useState } from "react";

const categorySelectedContext = createContext()
const CategorySelectedProvider = ({children}) =>{
  const [categorySelected, setCategorySelected] = useState({}) 
    return <categorySelectedContext.Provider value={{categorySelected, setCategorySelected}}>{children}
    </categorySelectedContext.Provider>
}

export {CategorySelectedProvider, categorySelectedContext};
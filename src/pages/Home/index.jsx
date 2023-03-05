import React,{useContext, useEffect} from 'react'
import Styles from './styled.js'
import { categorySelectedContext } from '../../contexts/CategorySelectedContext.jsx'
import { userDataContext } from '../../contexts/UserDataContext.jsx'
import categoriesData from '../../services/data.json'
const Home = () => {
const { categorySelected, setCategorySelected } = useContext(categorySelectedContext)
const { userData, setUserData } = useContext(userDataContext)

  return (
    <Styles>
        Home
    </Styles>
  )
}

export default Home
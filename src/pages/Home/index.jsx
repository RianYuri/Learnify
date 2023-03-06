import React,{useContext, useEffect} from 'react'
import Styles from './styled.js'
import { categorySelectedContext } from '../../contexts/CategorySelectedContext.jsx'
import { userDataContext } from '../../contexts/UserDataContext.jsx'
import categoriesData from '../../services/data.json'
import fullLogo from '../../assets/imgs/logo-full.svg'
import arrowIcon1 from '../../assets/imgs/cat-arrow-1.svg'
import arrowIcon2 from '../../assets/imgs/cat-arrow-2.svg'
import illLanguages from '../../assets/imgs/languages-illustration.svg'
import illMath from '../../assets/imgs/math-illustration.svg'
import illLaw from '../../assets/imgs/law-illustration.svg'
import illProg from '../../assets/imgs/prog-illustration.svg'
import illAll from '../../assets/imgs/all-illustration.svg'
import Button from '../../global/Button.js'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const { categorySelected, setCategorySelected } = useContext(categorySelectedContext)
const { userData, setUserData } = useContext(userDataContext.userName !== '' ? 
    userDataContext : 
    {
        userName: localStorage.getItem('userName')
    }
    )    
    const navigate = useNavigate()
    const handleSelectCategory = (category) => {
        try {
            const numItemsToSelect = 10;
            for (let i = items.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [categoriesData[i], categoriesData[j]] = [categoriesData[j], categoriesData[i]];
                }
                const selectedItems = categoriesData.slice(0, numItemsToSelect);
                    setCategorySelected(selectedItems)
        } catch (error) {
            console.log(error)
        }finally{
            navigate('/select-knowledge')
        }
        }
  return (
    <Styles>
        <section className='home__container'>
            <div className="square type-1">
            </div>
            <div className="square type-2">
            </div>
            <div className="square type-3">
            </div>
            <div className="square type-4">
            </div>
            <header className='heading'>
            <img className='heading__logo' src={fullLogo} alt="Logo do LearniFy" />
            <h1 className='home__title'>Olá, { userData.userName }</h1>
            <h2 className='home__subtitle'>Vamos testar os seus conhecimentos?</h2>
            </header>
            <div className="categories__grid">
                <div className='cat1' onClick={() => handleSelectCategory('Linguagens')}>
                    <span>Linguagens <img src={arrowIcon1}/></span>
                    <img className='illustration' src={illLanguages} alt="Ilustração de linguagens" />
                </div>
                <div className='cat2' onClick={() => handleSelectCategory('Matematica')}>
                    <span>Matemática <img src={arrowIcon2}/></span>
                    <img className='illustration'  src={illMath} alt="Ilustração de matemática" />
                </div>
                <div className='cat3' onClick={() => handleSelectCategory('Leis')}>
                    <span>Direito <img src={arrowIcon2}/></span>
                    <img className='illustration' src={illLaw} alt="Ilustração de direito" />
                </div>
                <div className='cat4' onClick={() => handleSelectCategory('Programação')} >
                    <span>Programação <img src={arrowIcon1}/></span>
                    <img className='illustration' src={illProg} alt="Ilustração de programação" />
                </div>
                <div className='cat5' onClick={() => handleSelectCategory('Geral')}>
                    <div className="general">
                    <img src={illAll} alt="Ilustração de geral" />
                    </div>
                    <span className='title'>Conhecimento geral</span>
                    <span className='subtitle'>
                        Todas as categorias no teste para desafiar você
                    </span>
                    <Button>Iniciar teste</Button>
                </div>
            </div>
        </section>
    </Styles>
  )
}

export default Home
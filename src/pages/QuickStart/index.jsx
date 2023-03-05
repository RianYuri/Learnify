import React, {useState} from 'react'
import Styles from './styled.js'
import fullLogo from '../../assets/imgs/logo-full.svg'
import arrowIcon from '../../assets/imgs/arrow-icon.svg'
import Button from '../../global/Button.js'

const QuickStart = () => {
    const [nameActive, setNameActive] = useState({
        name: '',
        active: true
    })
  return (
    <Styles active={nameActive.active}>
        <section className='splash__animation'>
                <section className="splash-1">
                        <div className="square type-1">
                        </div>
                        <div className="square type-2">
                        </div>
                        <div className="square type-3">
                        </div>
                        <div className="square type-4">
                        </div>
                        <div className='logo__wrapper'>
                        <img className='splash__logo-2' src={fullLogo} alt="Logo do learniFy"/>
                        </div>
                </section>
        </section>
        <section className="name__input-form"> 
                <div className="square type-1">
                </div>
                <div className="square type-2">
                </div>
                <div className="square type-3">
                </div>
                <div className="square type-4">
                </div>
                <section className="name__input-container">
                <img className='splash__logo-2' src={fullLogo} alt="Logo do learniFy"/>
                <Button>Continuar <img src={arrowIcon}/> </Button>

                </section>
        </section>
    </Styles>
  )
}

export default QuickStart
import React from 'react'
import Styles from './styled.js'
import logo from '../../assets/imgs/logo.svg'

const QuickStart = () => {
  return (
    <Styles>
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
                        <div className="square type-5">
                        </div>
                        <div className="square type-6">
                        </div>
                        <img className='splash__logo-1' src={logo} alt="Ícone da logo do learniFy"/>
                </section>
        </section>  
    </Styles>
  )
}

export default QuickStart
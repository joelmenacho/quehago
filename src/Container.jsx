import React from 'react'
import './Container.css'


const Container = (props) => {
  return (
    <div className='marker'>
        <p>¿Interesado en colaborar conmigo?</p>
        <hr />
        
        <div>{props.children}</div>
        <hr />
    
        <p>Viviendo, aprendiendo y subiendo de nivel un día a la vez.</p>
    </div>
  )
}

export default Container
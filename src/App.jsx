import { useState, useEffect } from 'react';
import './App.css';
import Container from './Container';
import Counter from './Counter';
import Header from './Header';


function App() {

  const name = 'Joel';
  const age = '23';
  const experience = '1';



  //let counter = 0; Sin hooks

  //! HOOK Use State

  const [counter, setCounter] = useState(0);
  const [mode, setMode] = useState(true);
  const [message, setMessage] = useState('The mode is: ');

  const changeMode = () => {
    setMode(!mode)
    // setMode( 
    //   (mode) => !mode 
    // )
    // setMode(
    //   (mode) => {
    //     return !mode
    //   }
    // )
  }

  useEffect(() => {

    //! QUE ES LO QUE HACE
    setMessage(
      (currentState) => {

        currentState = 'The mode is: '
        console.log(currentState)
        return mode ? `${currentState} Encendido` : `${currentState} Apagado`
      }
    )


  }, [mode]);//!QUE LO MOTIVA A HACERLO


  //! HOOKS: Funcionalidades de React que nos permiten extender funcionalidades de React

  if (mode) {
    return <div>
      <p>Joel Menacho. .¿Qué es lo que él hace?</p>
      <button onClick={changeMode}>Averiguar</button>
    </div>
    
  } else {
    return (
      <div className='container'>
  
        <Header name={name} age={age} experience={experience} counter={counter} message={message} />
        <hr />
        <Counter counter={counter} setCounter={setCounter} />
  
        {/* SI EL NUMERO ES  MAYOR QUE 20 MOSTRAR QUE ES MAYOR QUE 20 */}
  
        {counter > 10 &&
          <div>
            <h5>Es mayor que 10</h5>
          </div>
        }
  
        <hr />
  
  
        <button onClick={changeMode}>volver al inicio</button>
        {message}
  
       <Container>
            <h3>Siempre estoy abierto a discutir el trabajo de diseño de productos</h3>
  </Container>
  
      </div>
    );
  }

 
}

export default App;

import React from 'react'

const Counter = ({counter,setCounter}) => {
    const incrementNumber = (number) => {
        // console.log(number)
        // counter = counter + number
        //! Modificar counter
        setCounter(counter + number)


    }
    return (
        <div>
            {/* <button onClick={incrementNumber}>Click!</button> si es que no tuviera parametros*/ }
            <button onClick={ ()=> { incrementNumber(1) } }> Click!</button >
            <p>{counter}</p>
        </div>
        
     )
}

export default Counter
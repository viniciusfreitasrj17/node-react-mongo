import React from 'react'

function Confirmation({ close, info, funcs }) {

    return (
        <main>
            <h1> {`Deseja ${info} os dados?`} </h1>
            <button onClick={funcs} > Sim </button>
            <button onClick={close} > Não </button>
        </main>
    )
}

export default Confirmation
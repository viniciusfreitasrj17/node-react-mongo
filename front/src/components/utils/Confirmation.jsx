import React from 'react'

function Confirmation({ close, info }) {

    return (
        <main>
            <h1> {`Deseja ${info} os dados?`} </h1>
            <button onClick={close} > Não </button>
            <button onClick={close} > Não </button>
        </main>
    )
}

export default Confirmation
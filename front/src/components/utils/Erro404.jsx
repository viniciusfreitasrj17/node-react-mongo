import React from 'react'

function Erro({ close }) {

    return (
        <main>
            <h1> Erro no sistema, peço que entre em contato com o suporte. </h1>
            <button onClick={close} > OK </button>
        </main>
    )
}

export default Erro
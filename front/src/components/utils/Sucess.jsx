import React from 'react'

function Sucess({ close, info, funcs }) {

    return (
        <main>
            {funcs()}
            <h1> {`Novos dados ${info} com sucesso`} </h1>
            <button onClick={close} > OK </button>
        </main>
    )
}

export default Sucess
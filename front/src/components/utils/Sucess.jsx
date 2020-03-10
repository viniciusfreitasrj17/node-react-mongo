import React from 'react'

function Sucess({ close, info, funcs, closed }) {

    return (
        <main>
            <h1> {`Novos dados ${info} com sucesso`} </h1>
            <button onClick={() => {
                close()
                setTimeout(() => closed(), 75)
                setTimeout(() => funcs(), 150)
            }} > OK </button>
        </main>
    )
}

export default Sucess
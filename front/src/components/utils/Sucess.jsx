import React from 'react'

import './styles.css'

function Sucess({ close, info, funcs, closed }) {

    return (
        <main className='popupInformation' >
            <h1> {`Novos dados ${info} com sucesso`} </h1>
            <button className='popupOk' onClick={() => {
                close()
                setTimeout(() => (closed) ? closed() : false, 75)
                setTimeout(() => funcs(), 150)
            }} > OK </button>
        </main>
    )
}

export default Sucess
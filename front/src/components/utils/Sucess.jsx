import React from 'react'

import './styles.css'

function Sucess({ close, info, funcs, closed }) {

    return (
        <main className='popupInformation' >
            {setTimeout(() => funcs(), 150)}
            <h1> {`Novos dados ${info} com sucesso`} </h1>
            <button className='popupOk' onClick={() => {
                close()
                setTimeout(() => (closed) ? closed() : false, 75)
                // if(info === 'atualizados') { window.location.reload() }
                setTimeout(() => {
                    if(info !== 'adicionados') {
                    window.location.reload()
                }}, 100)
            }} > OK </button>
        </main>
    )
}

export default Sucess

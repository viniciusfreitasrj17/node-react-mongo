import React from 'react'
import Popup from 'reactjs-popup'

import Sucess from '../utils/Sucess'

function Confirmation({ close, funcs, infoC, infoS }) {

    return (
        <main>
            <h1> {`Deseja ${infoC} os dados?`} </h1>
            <Popup trigger={<button /*onClick={funcs()}*/ > Sim </button>} modal>
                {close => <Sucess close={close} info={infoS} funcs={funcs} /> }
            </Popup>
            
            <button onClick={close} > Não </button>
        </main>
    )
}

export default Confirmation
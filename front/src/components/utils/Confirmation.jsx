import React from 'react'
import Popup from 'reactjs-popup'

import Sucess from '../utils/Sucess'

function Confirmation({ close, funcs, infoC, infoS }) {

    // const [open, setOpen] = useState(false)

    function closed() {
        close()
    }

    return (
        <main>
            <h1> {`Deseja ${infoC} os dados?`} </h1>
            <Popup trigger={<button > Sim </button>} modal>
                {close => <Sucess close={close} info={infoS} funcs={funcs} closed={closed} /> }
            </Popup>
            
            <button onClick={close} > Não </button>
        </main>
    )
}

export default Confirmation
import React from 'react'
import Popup from 'reactjs-popup'

import Sucess from '../utils/Sucess'

import './styles.css'

function Confirmation({ close, funcs, infoC, infoS }) {

    // const [open, setOpen] = useState(false)

    function closed() {
        close()
    }

    return (
        <main className='popupInformation' >
            <h1> {`Deseja ${infoC} os dados?`} </h1>
            <Popup trigger={<button className='popupYes' > Sim </button>} modal>
                {close => <Sucess close={close} info={infoS} funcs={funcs} closed={closed} /> }
            </Popup>
            
            <button className='popupNo' onClick={close} > Não </button>
        </main>
    )
}

export default Confirmation
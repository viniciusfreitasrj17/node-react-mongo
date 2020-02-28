import React from 'react'

import './styles.css'
import Popup from 'reactjs-popup'
import Update from '../Update'

function Admin({ p, delItem, upItem, index }) {
    async function deleteItem(e) {
        e.preventDefault()

        await delItem(p._id, index)
    }

    return (
        <li key={p._id} >
            <Popup trigger={<button className='fecharProduto' > X </button>} modal>
                {close => (
                    <div>
                        <h1>Title</h1>
                        <button className="adminLink" onClick={deleteItem} > Delete </button>
                        <button className="adminLink" onClick={close} > &times; </button>
                    </div>
                )}
            </Popup>
            <Popup trigger={<button className='updateProduto'> Editar </button>} modal>
              {close => <Update p={p} close={close} upItem={upItem} indexUp={index} /> }
            </Popup>
            <img
                src={p.imgUrl}
                alt={p.name}
            />
            <header>
                <div className='prod-info' >
                    <strong> {p.name} </strong>
                    <span> {p.description} </span>
                    <p> {p.detail} </p>
                </div>
                <div className='prod-add' >
                    {(p.amount > 0 ? <span id='qtd-none' /> : <span id='qtd'>FORA DO ESTOQUE</span>)}
                    <span id='price' > {`R$ ${p.price}`} </span>
                </div>
            </header>
        </li>

    )
}

export default Admin
import React from 'react'
import Popup from 'reactjs-popup'

import './styles.css'
import Update from '../Update'
import Confirmation from '../utils/Confirmation'

function Admin({ p, delItem, upItem }) {
    async function deleteItem() {
        // e.preventDefault()

        await delItem(p._id).then(res => {
            console.log('sucesso', res);
        }).catch(err => {
            console.log('error', err);
        })
    }

    return (
        <li key={p._id} >
            <Popup trigger={<button className='fecharProduto' > X </button>} modal>
                {closeX => (
                    // <div>
                    //     <h1>Title</h1>
                    //     <Popup trigger={<button className="adminLink" > Delete </button>} modal>
                    //         {close => <Sucess close={close} info={'deletados'} funcs={deleteItem} closed={() => {closeX()}} /> }
                    //      </Popup>
                    //     <button className="adminLink" onClick={closeX} > &times; </button>
                    // </div>
                    <Confirmation funcs={deleteItem} close={closeX} infoC={'deletar'} infoS={'deletados'} />
                )}
            </Popup>
            <Popup trigger={<button className='updateProduto'> Editar </button>} modal>
              {close => <Update p={p} close={close} upItem={upItem} /> }
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

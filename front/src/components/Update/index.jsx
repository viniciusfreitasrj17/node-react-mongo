import React, { useState } from 'react'
import Popup from 'reactjs-popup'

import './styles.css'

import Sucess from '../utils/Sucess'
import Confirmation from '../utils/Confirmation'

function Update({ p, close, upItem }) {
    const [name, setName] = useState(p.name)
    const [description, setDescription] = useState(p.description)
    const [detail, setDetail] = useState(p.detail)
    const [imgUrl, setImgUrl] = useState(p.imgUrl)
    const [price, setPrice] = useState(p.price)
    const [amount, setAmount] = useState(p.amount)

    async function handleSubmit(e) {
        e.preventDefault()

        await upItem(p._id, {
            name,
            description,
            detail,
            imgUrl,
            price,
            amount
        }).then(res => {
            console.log('sucesso', res);
        }).catch(err => {
            console.log('error', err);
        })

        
    }

    function aaa() {
        let a = 2
        console.log(a)

        return (
          <Popup modal>
              {close => <Sucess close={close} info={'atualizados'} /> }
          </Popup>
        )
    }

    return (
        <main id='update' >
            <button className="adminLink" onClick={close} > &times; </button>
            <strong>Atualizar Produto</strong>
            <div className='divFormUpdate' >
                <div className='input-block' >
                    <label htmlFor='name' >Nome do Produto</label>
                    <input
                        name='name'
                        id='name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='description' >Descrição do Produto</label>
                    <input
                        name='description'
                        id='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='detail' >Detalhes</label>
                    <textarea
                        name='detail'
                        id='detail'
                        rows='2'
                        cols='33'
                        value={detail}
                        onChange={e => setDetail(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='imgUrl' >Link da Imagem</label>
                    <input
                        name='imgUrl'
                        id='imgUrl'
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='price' >Preço do Produto</label>
                    <input
                        name='price'
                        id='price'
                        type='number'
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='amount' >Quantidade</label>
                    <input
                        name='amount'
                        id='amount'
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>

                {/* <button onClick={handleSubmit} >Atualizar</button> */}
                <Popup trigger={<button >Atualizar</button>} modal >
                    {close => <Confirmation funcs={aaa} close={close} info={'atualizar'} /> }
                </Popup>
            </div>
        </main>
    )
}

export default Update
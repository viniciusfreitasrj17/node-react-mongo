import React, { useState } from 'react'

import api from '../../service/api'
import './styles.css'

function Update({ p, close }) {
    const [name, setName] = useState([p.name])
    const [description, setDescription] = useState([p.description])
    const [detail, setDetail] = useState([p.detail])
    const [imgUrl, setImgUrl] = useState([p.imgUrl])
    const [price, setPrice] = useState([p.price])
    const [amount, setAmount] = useState([p.amount])

    async function handleSubmit(e) {
        e.preventDefault()

        const { data } = await api.put(`/prod/${p._id}`, {
            name,
            description,
            detail,
            imgUrl,
            price,
            amount
        }, { headers: {'Content-Type': 'application/json'} })

        console.log(data)

        close()
    }

    return (
        <main id='update' >
            <button className="adminLink" onClick={close} > &times; </button>
            <strong>Atualizar Produto</strong>
            <div className='divForm' >
                {/* <input type='hidden' name='_id' value={p._id} /> */}
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

                <button onClick={handleSubmit} >Atualizar</button>
            </div>
        </main>
    )
}

export default Update
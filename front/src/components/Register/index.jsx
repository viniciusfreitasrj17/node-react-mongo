import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import { Link } from 'react-router-dom'

import Sucess from '../utils/Sucess'

import './styles.css'

function Register({ onSubmit }) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [detail, setDetail] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState(0)

    const [s, setS] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
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

        setName('')
        setDescription('')
        setDetail('')
        setImgUrl('')
        setPrice(0)
        setAmount(0)

        setS(<Popup modal > {close => <Sucess close={close} info={'adicionados'} /> } </Popup>)
    }

    return (
        <main id='register' >
            <Link id='adminLink' to='/admin'>Voltar</Link>
            <strong>Cadastro de Produto</strong>
            <div className='divFormRegister' >
                <div className='input-block' >
                    <label htmlFor='name' >Nome do Produto</label>
                    <input
                        name='name'
                        id='name'
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='description' >Descrição do Produto</label>
                    <input
                        name='description'
                        id='description'
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='detail' >Detalhes</label>
                    <textarea
                        name='detail'
                        id='detail'
                        required
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
                        required
                        value={imgUrl}
                        onChange={e => setImgUrl(e.target.value)}
                    />
                </div>

                <div className='input-block' >
                    <label htmlFor='price' >Preço do Produto</label>
                    <input
                        name='price'
                        id='price'
                        required
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

                <button className='buttonRegister' onClick={handleSubmit} >Cadastrar</button>
                {/* <Popup trigger={ <button className='buttonRegister' >Cadastrar</button> } modal >
                    {close => <Sucess close={close} info={'adicionados'} funcs={handleSubmit} /> }
                </Popup> */}
                {s}
                <Popup modal > {close => <Sucess close={close} info={'adicionados'} /> } </Popup>
            </div>
        </main>
    )
}

export default Register
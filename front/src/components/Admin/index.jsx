import React from 'react'

import './styles.css'

function Admin(props) {
    const { p, delItem } = props

    async function deleteItem(e) {
        e.preventDefault()

        await delItem(p._id)
    }

    return (
        <li key={p._id} >
            <form onSubmit={deleteItem} >
                <button id='fecharProduto' type='submit'>
                    X
                </button>
            </form>
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
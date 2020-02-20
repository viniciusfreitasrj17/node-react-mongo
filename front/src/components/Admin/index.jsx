import React, { useState } from 'react'

import './styles.css'
import Popup from 'reactjs-popup'

function PopupEx() {

    return (
<Popup trigger={<button className="updateProduto"> Editar </button>} modal>
{close => (
  <div className="modal">
    <a className="close" onClick={close}>
      &times;
    </a>
    <div className="header"> Modal Title </div>
    <div className="content">
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
      Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
      delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
      commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
      explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
    </div>
    <div className="actions">
      <Popup
        trigger={<button className="button"> Trigger </button>}
        position="top center"
        closeOnDocumentClick
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          magni omnis delectus nemo, maxime molestiae dolorem numquam
          mollitia, voluptate ea, accusamus excepturi deleniti ratione
          sapiente! Laudantium, aperiam doloribus. Odit, aut.
        </span>
      </Popup>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>
  </div>
)}
</Popup>
    )
}

function Admin(props) {
    let [displayUp, setDisplayUp] = useState(false)

    const { p, delItem, upItem } = props

    async function deleteItem(e) {
        e.preventDefault()

        await delItem(p._id)
    }

    function dispUp(e) {
        e.preventDefault()

        setDisplayUp(!displayUp)
    }

    return (
        <li key={p._id} >
            <form onSubmit={deleteItem} >
                <button id='fecharProduto' type='submit'>
                    X
                </button>
            </form>
                <PopupEx />
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
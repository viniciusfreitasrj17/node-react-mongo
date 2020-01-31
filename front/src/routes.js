import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import api from './service/api'

import './Home.css'
import './Admin.css'

const Routes = () => {
  const [prod, setProd] = useState([])

  useEffect(() => {
    async function loadProd() {
      const { data } = await api.get('/prod')

      setProd(data)
    }

    loadProd()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => (
          <main id='home' >
            <ul>
              {prod.map(p => (
                <li>
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
              ))}
            </ul>
          </main>
        )} />
        <Route exact path='/admin' component={() => (
          <main id='admin' >
            <strong>Cadastro de Produto</strong>
            <form onSubmit={() => { }} >
              <div className='input-block' >
                <label htmlFor='name' >Nome do Produto</label>
                <input
                  name='name'
                  id='name'
                  required
                  value=''
                />
              </div>

              <div className='input-block' >
                <label htmlFor='description' >Descrição do Produto</label>
                <input
                  name='description'
                  id='description'
                  required
                  value=''
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
                  value=''
                />
              </div>

              <div className='input-block' >
                <label htmlFor='imgUrl' >Link da Imagem</label>
                <input
                  name='imgUrl'
                  id='imgUrl'
                  required
                  value=''
                />
              </div>

              <div className='input-block' >
                <label htmlFor='price' >Preço do Produto</label>
                <input
                  name='price'
                  id='price'
                  required
                  value=''
                />
              </div>

              <div className='input-block' >
                <label htmlFor='amount' >Quantidade</label>
                <input
                  name='amount'
                  id='amount'
                  value=''
                />
              </div>

              <button type='submit' >Cadastrar</button>
            </form>
          </main>
        )} />
        <Route exact path='/api' component={() => <>{prod.map(p => <div>{Object.entries(p)}</div>)}</>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
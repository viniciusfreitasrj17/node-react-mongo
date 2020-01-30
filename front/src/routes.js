import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './Home.css'
import './Admin.css'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={() => (
        <main id='home' >
          <ul>
            <li>
              <img
                src='https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/134217/3/134217361_1GG.jpg'
                alt='Samsung Galaxy S10'
              />
              <header>
                <div className='prod-info' >
                  <strong>Smartphone</strong>
                  <span>Samsung Galaxy S10</span>
                  <p>128GB Dual Chip Android 9.0 Tela 5,8 Octa-Core 4G Câmera 12MP + 16MP - Preto</p>
                </div>
                <div className='prod-add' >
                  <span id='qtd' >Quantidade 4</span>
                  <span id='price' >R$ 2.300,00</span>
                </div>
              </header>
            </li>

            <li>
              <img
                src='https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/134217/3/134217361_1GG.jpg'
                alt='Samsung Galaxy S10'
              />
              <header>
                <div className='prod-info' >
                  <strong>Smartphone</strong>
                  <span>Samsung Galaxy S10</span>
                  <p>128GB Dual Chip Android 9.0 Tela 5,8 Octa-Core 4G Câmera 12MP + 16MP - Preto</p>
                </div>
                <div className='prod-add' >
                  <span id='qtd' >Quantidade 4</span>
                  <span id='price' >R$ 2.300,00</span>
                </div>
              </header>
            </li>
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
    </Switch>
  </BrowserRouter>
)

export default Routes
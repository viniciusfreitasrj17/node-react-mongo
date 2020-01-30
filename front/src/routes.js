import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ () => (
          <main>
              <ul>
                  <li>
                      <img 
                        src='https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/134217/3/134217361_1GG.jpg'
                        alt='Samsung Galaxy S10'
                      />
                      <div className='prod-infp' >
                        <strong>Smartphone</strong>
                        <span>Samsung Galaxy S10</span>
                        <p>128GB Dual Chip Android 9.0 Tela 5,8 Octa-Core 4G Câmera 12MP + 16MP - Preto</p>
                      </div>
                      <span>Quantidade 4</span>
                      <span>R$ 2.300,00</span>
                  </li>

                  <li>
                      <img 
                        src='https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/134217/3/134217361_1GG.jpg'
                        alt='Samsung Galaxy S10'
                      />
                      <div className='prod-infp' >
                        <strong>Smartphone</strong>
                        <span>Samsung Galaxy S10</span>
                        <p>128GB Dual Chip Android 9.0 Tela 5,8 Octa-Core 4G Câmera 12MP + 16MP - Preto</p>
                      </div>
                      <span>Quantidade 4</span>
                      <span>R$ 2.300,00</span>
                  </li>
              </ul>
          </main>
      ) } />
      <Route exact path='/admin' component={ () => <h1>Admin</h1> } />
    </Switch>
  </BrowserRouter>
)

export default Routes
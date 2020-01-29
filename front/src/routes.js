import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ () => (
          <main>
              <ul>
                  <li>
                      {/* Aqui */}
                  </li>
              </ul>
          </main>
      ) } />
      <Route exact path='/admin' component={ () => <h1>Admin</h1> } />
    </Switch>
  </BrowserRouter>
)

export default Routes
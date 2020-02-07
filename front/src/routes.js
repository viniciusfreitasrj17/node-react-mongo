import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import api from './service/api'

import Register from './components/Register'
import Home from './components/Home'
import Admin from './components/Admin'

const Routes = () => {
  const [prod, setProd] = useState([])
  const [load, setLoad] = useState(0)
  
  useEffect(() => {
    async function loadProd() {
      const { data } = await api.get('/prod')

      setProd(data)
    }

    loadProd()
  }, [load])

  async function handleSubmit(d) {
    const { data } = await api.post('/prod', d)
    
    setProd([...prod, data])
  }

  async function deleteItemProd(d) {
    const { data } = await api.delete(`/prod/${d}`)

    if(data.deletedCount) {
      // document.location.reload(true)
      setLoad(load + 1)
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={() => (
          <main id='home' >
            <ul>
              {prod.map(p => <Home key={p._id} p={p} /> )}
            </ul>
          </main>
        )} />
        <Route exact path='/admin' component={() => (
          <main id='admin' >
           <div id='titlePainel'>
             <p>Painel Administrativo</p>
             <div id='ghost'></div>
             <Link id='registerLink' to='/register' >+</Link>
           </div>
           <ul>
             {prod.map(p => <Admin key={p._id} p={p} delItem={deleteItemProd} /> ) }
           </ul>
         </main>
        )} />
        <Route exact path='/register' component={() => <Register onSubmit={handleSubmit} /> } />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
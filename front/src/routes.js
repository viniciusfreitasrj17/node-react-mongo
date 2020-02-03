import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import api from './service/api'

import './Home.css'
import './Admin.css'

import Register from './components/Register'

const Routes = () => {
  const [prod, setProd] = useState([])

  useEffect(() => {
    async function loadProd() {
      const { data } = await api.get('/prod')

      setProd(data)
    }

    loadProd()
  }, [])

  async function handleSubmit(d) {
    const { data } = api.post('/prod', d)
    
    setProd([...prod, data])
  }

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
        <Route exact path='/register' component={() => <Register onSubmit={handleSubmit} /> } />
        <Route exact path='/api' component={() => <>{prod.map(p => <div>{Object.entries(p)}</div>)}</>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
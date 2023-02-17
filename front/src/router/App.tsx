import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from '../containers/Layout'

import Login from '../pages/login'
import Home from '../pages/home/index'
import Tickets from '../pages/tickets'
import NoFound from '../pages/noFound'
import Detail from '../pages/DetailTicket'

import { MenuContextProvider } from '../context/counterContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <MenuContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/tickets/:id' element={<Detail />} />
          <Route path='*' element={<NoFound/>} />
        </Routes>
      </Layout>
    </MenuContextProvider>
    </BrowserRouter>
  )
}

export default App

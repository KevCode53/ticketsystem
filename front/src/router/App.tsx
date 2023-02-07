import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../pages/home/index'
import Tickets from '../pages/tickest'
import NoFound from '../pages/noFound'
import Detail from '../pages/DetailTicket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tickets' element={<Tickets />} />
        <Route path='/tickets/:id' element={<Detail />} />
        <Route path='*' element={<NoFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

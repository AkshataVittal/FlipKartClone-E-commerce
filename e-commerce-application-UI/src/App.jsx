import { useState } from 'react'
import Header from './util/Header'
import {Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-slate-100 h-screen'>
      <Header/>
      <Outlet/>
    </div>
  )
    
}

export default App

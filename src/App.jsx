import React from 'react'
import Routing from './utils/Routing'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className=' h-screen'>
      <Navbar/>
      <Routing/>
    </div>
  )
}

export default App
import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Chat from './components/Chat/Chat'


import './App.css'

function App() {
 
  return (
    <>
      <div>
        <Navbar />
           {/* contenido principal */}
          <div className="content bg-light-subtle" >
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'
import Chat from './components/Chat/Chat'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
          <div className="content bg-light-subtle" style={{ marginLeft: '200px', paddingTop: '60px', paddingBottom: '40px' }}>
          <Chat />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

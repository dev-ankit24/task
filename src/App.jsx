import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './componets/Navbar'

function App() {

  return (
    <>
     <BrowserRouter>
       <Navbar />
        <Routes>


        </Routes>
     
     </BrowserRouter>
        </>
  )
}

export default App

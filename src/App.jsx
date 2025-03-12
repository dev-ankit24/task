import { useState } from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './componets/partials/Navbar'
import Home from './pages/Home'
// import { Route } from 'lucide-react'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
        </>
  )
}

export default App

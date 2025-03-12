import { useState } from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './componets/partials/Navbar'
import Home from './pages/Home'
import Footer from './componets/Footer'
import Error404 from './componets/Error404'
// import { Route } from 'lucide-react'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/error" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
        </>
  )
}

export default App

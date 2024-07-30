import { useState } from 'react'
import Home from './Pages/Home/Home'



const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
      
      <Home/>
    </div>
  )
}

export default App
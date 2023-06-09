import { Route, Routes } from 'react-router-dom'
import './App.css'
import OpciPodaci from './pages/OpciPodaci/OpciPodaci'
import Donacije from './pages/Donacije/Donacije'
import Obavijesti from './pages/Obavijesti/Obavijesti'
import PopisZivotinja from './pages/PopisZivotinja/PopisZivotinja'
import UnosNoveZivotinje from './pages/UnosNoveZivotinje/UnosNoveZivotinje'
import Login from './pages/Login/Login'
import Navigacija from './components/Navigacija/Navigacija'
import Footer from './components/Footer/Footer'
import userContext from './context/userContext'
import { useState } from 'react'

function App() {

  const [user,setUser] = useState(false)
  const handleUserChange = (e) => {
    setUser(e.target.checked)
  }

  return (
    <div className="App">
      <userContext.Provider value={user} >
      <Navigacija action={handleUserChange}/>
      
      <div className="pages">
      <Routes>
        <Route path="/" element={<OpciPodaci />} />
        <Route path="/donacije" element={<Donacije />} />
        <Route path="/obavijesti" element={<Obavijesti />} />
        <Route path="/zivotinje" element={<PopisZivotinja />} />
        <Route path="/unosnovezivotinje" element={user ? <UnosNoveZivotinje /> : <p>Niste ovlašteni za ovu pristup stranici</p>} />
        <Route path="/login" element={<Login /> } />
        <Route path="/noviracun" element={<Login /> } />
      </Routes>
      </div>

      <div className="footer">
        <Footer />
      </div>
      </userContext.Provider>
    </div>
  )
}

export default App

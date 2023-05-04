import { Route, Routes } from 'react-router-dom'
import './App.css'
import OpciPodaci from './pages/OpciPodaci/OpciPodaci'
import Donacije from './pages/Donacije'
import Obavijesti from './pages/Obavijesti'
import PopisZivotinja from './pages/PopisZivotinja/PopisZivotinja'
import UnosNovihZivotinja from './pages/UnosNovihZivotinja'
import Navigacija from './components/Navigacija/Navigacija'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Navigacija />
      
      <div className="pages">
      <Routes>
        <Route path="/" element={<OpciPodaci />} />
        <Route path="/donacije" element={<Donacije />} />
        <Route path="/obavijesti" element={<Obavijesti />} />
        <Route path="/popiszivotinja" element={<PopisZivotinja />} />
        <Route path="/unosnovihzivotinja" element={<UnosNovihZivotinja />} />
      </Routes>
      </div>

      <div className="footer">
      <Footer />
      </div>
    </div>
  )
}

export default App

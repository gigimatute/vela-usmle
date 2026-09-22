import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pasos from './pages/Pasos'
import Alianzas from './pages/Alianzas'
import Recursos from './pages/Recursos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pasos" element={<Pasos />} />
          <Route path="/alianzas" element={<Alianzas />} />
          <Route path="/recursos" element={<Recursos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
